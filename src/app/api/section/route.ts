import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const body = await request.json();
  
  const { userId, sectionid, completionStatus, sectionPoints, moduleId } = body;

  try {
    const updatedSectionProgress = await prisma.userSectionProgress.upsert({
      where: {
        userId_sectionId: {
          userId: userId,
          sectionId: sectionid
        }
      },
      update: {
        completionStatus: completionStatus,
      },
      create: {
        userId: userId,
        sectionId: sectionid,
        completionStatus: completionStatus
      }
    });

    if (!updatedSectionProgress) {
      throw new Error("Failed to update section progress. Remember you need to be logged in first.");
    }

    const updatedModuleProgress = await prisma.userModuleProgress.upsert({
      where: {
        userId_moduleId: {
          userId: userId,
          moduleId: moduleId,
        }
      },
      update: {
        progress: {
          increment: sectionPoints
        }
      },
      create: {
        userId: userId,
        moduleId: moduleId,
        completionStatus: completionStatus,
        progress: sectionPoints
      }
    });    

    return NextResponse.json({ 
        success: true,
        updatedSectionProgress,
        updatedModuleProgress
     });
  } catch (error) {
    console.error("Failed to update section progress. Remember you need to be logged in first:", error);
    return NextResponse.json({ error: "Error updating section progress" });
  }
}
