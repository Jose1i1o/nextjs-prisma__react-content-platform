import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const body = await request.json();
  const { userId, sectionId, completionStatus } = body;

  try {
    const updatedSectionProgress = await prisma.userSectionProgress.upsert({
      where: {
        userId_sectionId: {
          userId: userId,
          sectionId: sectionId
        }
      },
      update: {
        completionStatus: completionStatus
      },
      create: {
        userId: userId,
        sectionId: sectionId,
        completionStatus: completionStatus
      }
    });

    return NextResponse.json(updatedSectionProgress);
  } catch (error) {
    console.error("Failed to update section progress:", error);
    return NextResponse.json({ error: "Error updating section progress" });
  }
}
