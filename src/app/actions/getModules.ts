import prisma from "@/libs/prismadb";

export default async function getModules() {
  try {
    const modules = await prisma.module.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return modules;
  }
  catch (error) {
    console.error("Failed to fetch modules:", error);
    throw error;
  }
}