import getListings from "./actions/getListings";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container/Container";
import EmptyState from "./components/micro_components/EmptyState/EmptyState";

export default async function Home() {
	const listings = await getListings();

	if (listings.length === 0 || !listings) {
		return (
			<ClientOnly>
				<EmptyState showReset />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<Container>
				<div
					className="
						gap-4
					"
				>
					{listings.map((listing: any) => (
						<div
							key={listing.id}
							className="
								p-4
								rounded-md
								bg-white
								shadow-sm
							"
						>
							<h2>{listing.title}</h2>
							<p>{listing.description}</p>
							<img src={listing.image} alt={listing.title} />
							<code className="text-sm">{listing.code}</code>
						</div>
					))}
				</div>
			</Container>
		</ClientOnly>
	);
}
