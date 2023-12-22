import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type HeaderProps = {
  blockTitle: string;
}

export type accordionItemProps = {
  id: number;
  title: JSX.Element;
  content: JSX.Element;
}[];

export type GenericBlockProps = {
  show?: boolean;
  setter?: React.Dispatch<React.SetStateAction<boolean>>;
  courseProgress: {
      [key: string]: {
        title: string;
        completionStatus: string;
        points: number;
      };
  };
};