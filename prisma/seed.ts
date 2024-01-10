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

	const completionTypes = {
    completed: "completed",
    inProgress: "inProgress",
    notCompleted: "notCompleted",
};

const modules = [
    {
      moduleTitle: "Bundlers",
      moduleItem: "module 0",
      title: "Bundlers",
      completionStatus: completionTypes.inProgress,
      progress: 100,
      reviews: [],
      userModuleProgress: [],
      sections: [
          {
              title: "Introduction Video",
              completionStatus: completionTypes.completed,
              points: 5,
              userProgress: []
          },
          {
              title: "JavaScript Bundlers",
              completionStatus: completionTypes.completed,
              points: 10,
              userProgress: []
          },
          {
              title: "Webpack",
              completionStatus: completionTypes.completed,
              points: 10,
              userProgress: []
          },
          {
              title: "Vite",
              completionStatus: completionTypes.inProgress,
              points: 10,
              userProgress: []
          },
          {
              title: "Other Bundlers",
              completionStatus: completionTypes.notCompleted,
              points: 10,
              userProgress: []
          },
          {
              title: "Other Frameworks",
              completionStatus: completionTypes.notCompleted,
              points: 10,
              userProgress: []
          },
          {
              title: "NPM and others",
              completionStatus: completionTypes.notCompleted,
              points: 10,
              userProgress: []
          }
      ]
    },
    {
      moduleTitle: "Intro",
      moduleItem: "module 1",
      title: "Introduction to React",
      completionStatus: completionTypes.notCompleted,
      progress: 50,
      reviews: [],
      userModuleProgress: [],
      sections: [
          {
              title: "React. The Film",
              completionStatus: completionTypes.notCompleted,
              points: 10,
              userProgress: []
          },
          {
              title: "The Evolution of React.js",
              completionStatus: completionTypes.notCompleted,
              points: 5,
              userProgress: []
          },
          {
              title: "Playground: Testing your React skills",
              completionStatus: completionTypes.notCompleted,
              points: 8,
              userProgress: []
          },
          {
              title: "Introduction Test Exercises",
              completionStatus: completionTypes.notCompleted,
              points: 12,
              userProgress: []
          }
      ]
    }
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