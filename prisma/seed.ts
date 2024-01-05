import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

  await prisma.module.deleteMany();
  await prisma.section.deleteMany();

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
      sections: [
          {
              title: "Introduction Video",
              completionStatus: completionTypes.completed,
              points: 5
          },
          {
              title: "JavaScript Bundlers",
              completionStatus: completionTypes.completed,
              points: 10
          },
          {
              title: "Webpack",
              completionStatus: completionTypes.completed,
              points: 10
          },
          {
              title: "Vite",
              completionStatus: completionTypes.inProgress,
              points: 10
          },
          {
              title: "Other Bundlers",
              completionStatus: completionTypes.notCompleted,
              points: 10
          },
          {
              title: "Other Frameworks",
              completionStatus: completionTypes.notCompleted,
              points: 10
          },
          {
              title: "NPM and others",
              completionStatus: completionTypes.notCompleted,
              points: 10
          }
      ]
    },
    {
      moduleTitle: "Intro",
      moduleItem: "module 1",
      title: "Introduction to React",
      completionStatus: completionTypes.notCompleted,
      progress: 50,
      sections: [
          {
              title: "React. The Film",
              completionStatus: completionTypes.notCompleted,
              points: 10
          },
          {
              title: "The Evolution of React.js",
              completionStatus: completionTypes.notCompleted,
              points: 5
          },
          {
              title: "Playground: Testing your React skills",
              completionStatus: completionTypes.notCompleted,
              points: 8
          },
          {
              title: "Introduction Test Exercises",
              completionStatus: completionTypes.notCompleted,
              points: 12
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
        sections: {
          create: moduleData.sections?.map((section) => ({
            title: section.title,
            completionStatus: section.completionStatus,
            points: section.points,
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