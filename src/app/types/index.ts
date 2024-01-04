import { User } from "@prisma/client";
import { ModuleTitle } from '../components/Sidebar/MenuTitle.styles';
import React, { ReactElement } from "react";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type Section = {
  id: string;
  moduleId?: string;
  title: string;
  completionStatus: string;
  points: number;
};

export type AccordionItem = {
  id: any;
  title: ReactElement | JSX.Element | null;
  content: ReactElement | JSX.Element | null;
};

export type accordionItemProps = AccordionItem[];

export type ModuleDescription = {
  // allow map to be called on sections
  map(arg0: (section: any, index: any) => { 
    id: any; 
    title: import("react").ReactElement<{ blockTitle: any; }, string | import("react").JSXElementConstructor<any>>; 
    content: import("react").DOMElement<import("react").DOMAttributes<Element>, Element>; 
  }): accordionItemProps[];
  ModuleTitle?: string;
  title: string;
  completionStatus: string;
  progress: number;
  sections: Section[];
};

export type ModuleInfo = {
  [key: string]: ModuleDescription;

};

export type GenericModuleProps = {
  show?: boolean;
  setter?: React.Dispatch<React.SetStateAction<boolean>>;
  moduleInfo: ModuleInfo | null;
};