import { completionTypes } from '../src/app/types'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

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
  const sectionCountPerModule = {
    "Bundlers": 7,
    "Intro": 4,
  };

  const pointsAllocatedPerSection = {
    "Bundlers": totalModulePoints / sectionCountPerModule["Bundlers"],
    "Intro": totalModulePoints / sectionCountPerModule["Intro"],
  };

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
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          },
          {
              title: "JavaScript Bundlers",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          },
          {
              title: "Webpack",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          },
          {
              title: "Vite",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          },
          {
              title: "Other Bundlers",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          },
          {
              title: "Other Frameworks",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          },
          {
              title: "NPM and others",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Bundlers,
              userProgress: []
          }
      ]
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
              points: pointsAllocatedPerSection.Intro,
              userProgress: []
          },
          {
              title: "The Evolution of React.js",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Intro,
              userProgress: []
          },
          {
              title: "Playground: Testing your React skills",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Intro,
              userProgress: []
          },
          {
              title: "Introduction Test Exercises",
              completionStatus: completionTypes.notCompleted,
              points: pointsAllocatedPerSection.Intro,
              userProgress: []
          }
      ]
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