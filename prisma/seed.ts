import { completionTypes } from '../src/app/types'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

type PointsPerModule = {
  [key: string]: number[];
};

async function main() {

  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.userSectionProgress.deleteMany();
  await prisma.userModuleProgress.deleteMany();
  await prisma.reviews.deleteMany();
  await prisma.module.deleteMany();
  await prisma.section.deleteMany();
  await prisma.user.deleteMany();

  const totalModulePoints = 100;
  
  //! Add the new sections here
  const totalSectionsPerModule = {
    "Bundlers": 7,
    "Intro": 4,
  };

  //? Important: This function ensures that the points are distributed evenly across all sections in a module and sums up to 100 even if the sections are using Math.round() and the Integer division is not exact as per the schema in the database. If I changed the Int to Float in the schema, it would still round up the numbers and not sum up to 100.
  let pointsAllocatedPerModule: PointsPerModule = {};

  for (let module in totalSectionsPerModule) {
    let sections = totalSectionsPerModule[module as keyof typeof totalSectionsPerModule];
    let totalPoints = 0;

    pointsAllocatedPerModule[module] = [];

    for (let i = 0; i < sections; i++) {
      if (i < sections - 1) {
        let points = Math.round(totalModulePoints / sections);
        pointsAllocatedPerModule[module].push(points);
        totalPoints += points;
      } else {
        let lastSectionPoints = totalModulePoints - totalPoints;
        pointsAllocatedPerModule[module].push(lastSectionPoints);
      }
    }
  }

  const modules = [
    {
      moduleTitle: "Bundlers",
      moduleItem: "module 0",
      title: "Bundlers",
      completionStatus: completionTypes.notCompleted,
      progress: 0,
      reviews: [],
      userModuleProgress: [],
      sections: [
          {
              title: "Introduction Video",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "JavaScript Bundlers",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "Webpack",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "Vite",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "Other Bundlers",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "Other Frameworks",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "NPM and others",
              completionStatus: completionTypes.notCompleted,              userProgress: []
          }
      ].map((section, index) => ({
          ...section,
          points: pointsAllocatedPerModule["Bundlers"][index]
        })),
      },
    {
      moduleTitle: "Intro",
      moduleItem: "module 1",
      title: "Introduction to React",
      completionStatus: completionTypes.notCompleted,
      progress: 0,
      reviews: [],
      userModuleProgress: [],
      sections: [
          {
              title: "React. The Film",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "The Evolution of React.js",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "Playground: Testing your React skills",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          },
          {
              title: "Introduction Test Exercises",
              completionStatus: completionTypes.notCompleted,
              userProgress: []
          }
        ].map((section, index) => ({
          ...section,
          points: pointsAllocatedPerModule["Intro"][index]
        })),
      },
  ];


  const createModules = modules.map(async (moduleData) => {
    return prisma.module.create({
      data: {
        moduleTitle: moduleData.moduleTitle,
        moduleItem: moduleData.moduleItem,
				title: moduleData.title,
        completionStatus: moduleData.completionStatus,
        progress: moduleData.progress,
        reviews: {
          create: moduleData.reviews?.map((review: any) => ({
            userId: review.userId,
            sectionId: review.sectionId,
            rating: review.rating,
            comment: review.comment,
          })),
        },
        userModuleProgress: {
          create: moduleData.userModuleProgress?.map((userModuleProgress: any) => ({
            userId: userModuleProgress.userId,
            moduleId: userModuleProgress.moduleId,
            completionStatus: userModuleProgress.completionStatus,
            progress: userModuleProgress.progress,
          })),
        },
        sections: {
          create: moduleData.sections?.map((section) => ({
            title: section.title,
            completionStatus: section.completionStatus,
            points: section.points,
            userProgress: {
              create: section.userProgress?.map((userProgress: any) => ({
                userId: userProgress.userId,
                sectionId: userProgress.sectionId,
                completionStatus: userProgress.completionStatus,
              })),
            },
          })),
        },
      },
    });
  });
  await Promise.all(createModules);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });