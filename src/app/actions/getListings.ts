import prisma from "@/libs/prismadb";
export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return listings.map((listing) => {
      return listing;
    });
  }
  catch (error: any) {
    return error;
  }
}