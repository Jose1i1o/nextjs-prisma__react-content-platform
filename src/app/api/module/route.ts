import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const body = await request.json();
  const { userId, moduleId, progress, completionStatus } = body;

  try {
    const updatedModuleProgress = await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId: userId,
          moduleId: moduleId
        }
      },
      update: {
        progress: progress,
        completionStatus: completionStatus
      },
      create: {
        userId: userId,
        moduleId: moduleId,
        progress: progress,
        completionStatus: completionStatus
      }
    });

    return NextResponse.json(updatedModuleProgress);
  } catch (error) {
    console.error("Failed to update module progress:", error);
    return NextResponse.json({ error: "Error updating module progress" });
  }
}
