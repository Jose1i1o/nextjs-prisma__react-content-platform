import { log } from 'console';
import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';


export async function GET(
  request: Request,
  res: NextApiResponse
) {
  const category = new URL(request.url).searchParams;
  const categoryValue = category.get('category');  

  try {
    // Fetch single module
    const module = await prisma.module.findFirst({
      where: {
        moduleTitle: categoryValue || undefined
      },
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        moduleItem: true,
        title: true,
        completionStatus: true,
        progress: true
      }
    });

    if (module) {
      // Fetch sections for the retrieved module
      const sections = await prisma.section.findMany({
        where: {
          moduleId: module.id
        },
        orderBy: {
          createdAt: 'desc'
        },
        select: {
          id: true,
          title: true,
          completionStatus: true,
          points: true
        }
      });

      // Combine module and sections data
      const result = {
        ...module,
        sections: sections
      };

      return NextResponse.json(result);
    } else {
      return NextResponse.json({ message: "Module not found" });
    }

  } catch (error) {
    console.error("Failed to fetch modules and sections:", error);
    return NextResponse.json({ error: "Error fetching data" });
  }
}