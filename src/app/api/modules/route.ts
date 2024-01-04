import prisma from '../../../libs/prismadb';
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';


export async function GET(
  request: Request,
  res: NextApiResponse
) {
  const category = new URL(request.url).searchParams;
  console.log('category', category);
  const categoryValue = category.get('category');
  console.log('categoryValue', categoryValue);

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
        progress: true
      }
    });

    console.log('thisModule', thisModule);
    
    if (thisModule) {
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
          points: true
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