'use client'

import React, { FC, use, useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { theme } from '@/theme/theme';
import Xarrow from "react-xarrows";
import { useModuleStore, useUserStore } from '@/app/context/store';

import {
    MenuContainer,
    ModuleTitle,
    CourseTitle,
    ProgressInfo,
    ProgressBarContainer,
    ProgressBar,
} from './MenuTitle.styles';


type SectionType = {
    id: string;
    title: string;
    completionStatus: string;
    points: number;
    userProgress: {
        completionStatus: string;
        sectionId: string;
        userId: string;
    }[]
};

type MenuTitleProps = {
    moduleItem: string;
    title: string;
    completionStatus: string;
    userModuleProgress: number;
};

type SidebarProps = {
    show: boolean;
    setter: (show: boolean) => void;
};

export const Sidebar: FC<SidebarProps> = ({ show }) => {
    
    const { currentUser } = useUserStore();
    const { currentModule } = useModuleStore();
       
    useEffect(() => {
    }, [currentModule]);
    
    const sections = currentModule?.sections;
    const userModuleProgress =
    currentUser === null
      ? 0
      : currentModule?.userModuleProgress?.[0]?.progress !== undefined
      ? currentModule.userModuleProgress[0].progress
      : 0;
    
    
    const sidebarClass = `w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40 h-screen overflow-y-auto ${show ? ' ml-0' : ' ml-[-250px] md:ml-0'}`;
    
    const findNextSection = (currentId: string) => {
        const currentIndex = sections.findIndex((section: { id: string; }) => section.id === currentId);
        return currentIndex >= 0 && currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
    };

    const checkIfSectionIsCompleted = (sectionId: string) => {
        const section = sections.find((section: { id: string; }) => section.id === sectionId);
        
        if(!section) return 'notCompleted';
        
        if (section.userProgress && section.userProgress?.length > 0) {
            const isCompleted = section.userProgress.some((progress: { completionStatus: string; }) => progress.completionStatus === 'completed');
            return isCompleted ? 'completed' : 'notCompleted';
        }
        return 'notCompleted';
    }

    const MenuItem = ({ section }: { section: SectionType }) => {
        const nextItemId = findNextSection(section.id);
        const userProgress = currentUser ? checkIfSectionIsCompleted(section.id) : 'notCompleted';
        
        const currentIndex = sections.findIndex((section: { id: any; }) => section.id === nextItemId?.id);

        const nextIcon = {
            completed: <FaCheck color={theme.colors.primary} size={20} />,
            inProgress: <FaCircleCheck color={theme.colors.primary} size={20} />,
            notCompleted: <FaCircle color={theme.colors.grey} size={18} />,
        }[userProgress];

        return (
            <div style={{ margin: '10px' }}>
                {section && (
                    <div style={{ margin: '15px 5px', display: 'flex', justifyContent: 'space-between', height: '50px' }}>
                        <div className={`flex gap-1 text-md pl-3 py-1 text-gray-100`} id={section?.id}>
                        {currentIndex > 0 && (
                            <Xarrow
                                start={sections[currentIndex - 1]?.id}
                                end={sections[currentIndex]?.id}
                                startAnchor={{ position: "left", offset: { x: 20, y: 15 } }}
                                endAnchor={{ position: "left", offset: { x: 20, y: -30 } }}
                                strokeWidth={1}
                                lineColor={theme.colors.grey}
                                headSize={0}
                                path="grid"
                                curveness={2}
                                gridBreak='20%'
                                showXarrow={true}
                                animateDrawing={false}
                                _extendSVGcanvas={1000}
                            />
                        )}
                            <div className="text-xl flex w-[30px]">
                                {nextIcon}
                            </div>
                            <div className="flex pl-3">{section?.title}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const MenuTitle:FC<MenuTitleProps> = ({ moduleItem, title, completionStatus, userModuleProgress }) => (
    <MenuContainer>
        <ModuleTitle>{moduleItem}</ModuleTitle>
        <CourseTitle>{title}</CourseTitle>
        <ProgressInfo>
            {/* <span>{completionStatus}</span> */}
            <span>{userModuleProgress}%</span>
        </ProgressInfo>
        <ProgressBarContainer>
            <ProgressBar onProgress={userModuleProgress} />
        </ProgressBarContainer>
    </MenuContainer>
);

    return (
        <div style={{ backgroundColor: theme.colors.black }} className={sidebarClass}>
            <div className="flex flex-col">
                <MenuTitle {...currentModule} userModuleProgress={userModuleProgress}/>
                {sections?.map((section: SectionType) => (
                    <MenuItem key={section.id} section={section} />
                ))}
            </div>
        </div>
    );
}