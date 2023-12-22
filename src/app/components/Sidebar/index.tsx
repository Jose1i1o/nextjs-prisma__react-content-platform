import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { LuCheckCheck } from "react-icons/lu";
import { TiMediaPlayOutline } from "react-icons/ti";
import { MdRemoveDone } from "react-icons/md";
import { theme } from '@/theme/theme';

type SidebarProps = {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
  courseProgress: {
      [key: string]: {
        title: string;
        completionStatus: string;
        points: number;
      };
  };
};

export const Sidebar: FC<SidebarProps> = ({ show, courseProgress }) => {

  const className =
    'bg-neutral-950 w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';

  const appendClass = show ? ' ml-0' : ' ml-[-250px] md:ml-0';

  const MenuItem = ({ icon, name }: any) => {

    return (
    <div className={`flex gap-1 [&>*]:my-auto text-md pl-3 py-4 text-gray-100`}>
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div className="flex [&>*]:mx-auto">{name}</div>
      </div>
    );
  };

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="flex flex-col">
          {Object.entries(courseProgress).map(([key, value]) => (
            <MenuItem
              key={key}
              icon={
                value.completionStatus === 'completed'
                  ? <LuCheckCheck color={theme.colors.primary} />
                    : value.completionStatus === 'in progress'
                    ? <TiMediaPlayOutline color={theme.colors.accent} />
                  : <MdRemoveDone color={theme.colors.secondary} />
              }
              name={value.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
