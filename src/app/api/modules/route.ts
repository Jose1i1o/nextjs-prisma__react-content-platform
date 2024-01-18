import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';


export async function GET(
  request: Request,
  res: NextApiResponse
) {
  const category = new URL(request.url).searchParams;
  const categoryValue = category?.get('category');
  const userId = category?.get('userId');
  const defaultUser = '000000000000000000000000';
  

  try {
    // Fetch single module
    const thisModule = await prisma.module.findFirst({
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
        progress: true,
        userModuleProgress: {
          select: {
            userId: true,
            moduleId: true,
            progress: true,
            completionStatus: true
          },
          where: {
            userId: userId
          }
        }
      }
    });
    // If no user is logged in, return module and sections with no user progress
    if (thisModule && userId === defaultUser) {
      console.log('first conditional');
      
      // Fetch sections for the retrieved module
      const sections = await prisma.section.findMany({
        where: {
          moduleId: thisModule.id
        },
        orderBy: {
          createdAt: 'desc'
        },
        select: {
          id: true,
          title: true,
          completionStatus: true,
          points: true,
        }
      });

      // Combine module and sections data
      const result = {
        ...thisModule,
        sections: sections
      };

      return NextResponse.json(result);
    }

    // If a user is logged in, return module and sections with user progress
    else
    if (thisModule && userId !== defaultUser) {
      const sections = await prisma.section.findMany({
        where: {
          moduleId: thisModule.id
        },
        orderBy: {
          createdAt: 'desc'
        },
        select: {
          id: true,
          title: true,
          completionStatus: true,
          points: true,
          userProgress: {
            select: {
              userId: true,
              sectionId: true,
              completionStatus: true
            },
            where: {
              userId: userId
            }
          },
        }
      });

      // Combine module and sections data
      const result = {
        ...thisModule,
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