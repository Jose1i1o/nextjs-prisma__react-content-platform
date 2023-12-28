import React, { FC } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import { theme } from '@/theme/theme';
import Xarrow from "react-xarrows";

type CourseProgressType = {
    module?: string;
    progress?: number;
    title: string;
    completionStatus: string;
    points: number;
};

type SidebarProps = {
    show: boolean;
    setter: (show: boolean) => void;
    courseProgress: Record<string, CourseProgressType>;
};

export const Sidebar: FC<SidebarProps> = ({ show, courseProgress }) => {
    const sidebarClass = `bg-neutral-950 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40 h-screen overflow-y-auto ${show ? ' ml-0' : ' ml-[-250px] md:ml-0'}`;

    const findNextItemKey = (currentKey: string) => {
        const keys = Object.keys(courseProgress);
        const currentIndex = keys.findIndex(key => key === currentKey);
        return keys[currentIndex + 1];
    };

    const MenuItem = ({ id }: { id: string }) => {
        const nextItemId = findNextItemKey(id);
        const nextItem = courseProgress[nextItemId];
        const keys = Object.keys(courseProgress);
        const currentIndex = keys.findIndex(key => key === id);

        const nextIcon = {
            completed: <FaCheck color={theme.colors.primary} size={20} />,
            inProgress: <FaCircleCheck color={theme.colors.primary} size={20} />,
            notCompleted: <FaCircle color={theme.colors.grey} size={18} />,
        }[nextItem?.completionStatus || 'notCompleted'];

        return (
            <div style={{ margin: '10px' }}>
                {nextItemId && (
                    <div style={{ margin: '15px 5px', display: 'flex', justifyContent: 'space-between', height: '30px' }}>
                        <div className={`flex gap-1 text-md pl-3 py-1 text-gray-100`} id={nextItemId}>
                        {currentIndex > 0 && (
                            <Xarrow
                                start={id}
                                end={nextItemId}
                                startAnchor={{ position: "left", offset: { x: 20, y: 20 } }}
                                endAnchor={{ position: "left", offset: { x: 20, y: -20 } }}
                                strokeWidth={1}
                                lineColor={theme.colors.grey}
                                headSize={0}
                                path="smooth"
                                curveness={1}
                                gridBreak='20%'
                                showXarrow={true}
                                animateDrawing={false}
                                _extendSVGcanvas={1000}
                            />
                        )}
                            <div className="text-xl flex w-[30px]">
                                {nextIcon}
                            </div>
                            <div className="flex pl-3">{nextItem?.title}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const MenuTitle = ({ module, title }: CourseProgressType) => (
        <div className="p-4 pt-5">
            <h3 className="text-white text-sm font-medium">{module}</h3>
            <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
    );

    return (
        <div className={sidebarClass}>
            <div className="flex flex-col">
                <MenuTitle module={courseProgress.moduleDetails.module} title={courseProgress.moduleDetails.title} completionStatus={courseProgress.moduleDetails.completionStatus} points={courseProgress.moduleDetails.points} />
                {Object.keys(courseProgress).map(key => (
                    <MenuItem key={key} id={key} />
                ))}
            </div>
        </div>
    );
};
