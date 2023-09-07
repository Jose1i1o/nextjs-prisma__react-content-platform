import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

  await prisma.listing.deleteMany({});

  const listings = [
    {
      category: "Bundleres",
      title: 'Bundleres',
      description: 'Master bundlers and roll out snappy performance in your projects!',
      imageSrc: 'bundleres-image.jpg',
      codeBlock: '...',
    },
    {
      category: "Intro",
      title: 'Intro',
      description: 'Get your web development journey rolling with an exciting intro to the field!',
      imageSrc: 'intro-image.jpg',
      codeBlock: '...',
    },
    {
      category: "useState",
      title: 'useState',
      description: 'Take a joyride with useState – the scooter of dynamic UIs awaits!',
      imageSrc: 'usestate-image.jpg',
      codeBlock: '...',
    }
  ]


  const createListingData = listings.map((listing) => {

    return prisma.listing.create({
      data: listing,
    });
  });

  await Promise.all(createListingData);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })