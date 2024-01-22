import { GrNext } from "react-icons/gr";
import { theme } from '@/theme/theme';
import Button from "./Button";
import { FC, use, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { useModuleStore } from "@/app/context/store";
import { completionTypes } from "@/app/types";
import { useCategory } from "@/app/hooks/useCategory";

interface AccountUser {
  currentuser: {
    accountPoints: number;
    createdAt: string;
    email: string;
    emailVerified: null | string;
    hashedPassword: null | string;
    id: string;
    image: string;
    name: string;
    updatedAt: string;
  }
}

type Section = {
  sectionid: string;
}

export const SetToCompleteButton: FC<AccountUser & Section> = ({ currentuser, sectionid }) => {

  const { currentModule, updateCurrentModule } = useModuleStore();
  const category = useCategory();
  
  const updateSection = useCallback(async () => {
    const userId = currentuser?.id;
    
    const moduleId = currentModule?.id;
    const completionStatus = completionTypes.completed;
    const sectionPoints = currentModule?.sections.find((section: any) => section.id === sectionid)?.points;

    try {
      const response = await fetch('/api/section', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          sectionid,
          completionStatus,
          sectionPoints,
          moduleId
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const { success, error } = data;
      
      if (success && !error) {
        updateCurrentModule(userId, category);
        toast.success('Section completed!');
      } 
      if (error && !success) {
        toast.warning('Failed to update section progress. Remember you need to be logged in first.');
      }
    } catch (error) {
      toast.error('Failed to update section progress. Remember you need to be logged in first.');
      console.error('Error updating section', error);
    }
  }, [sectionid, updateCurrentModule]);

  return (
    <Button 
      outline
      label="Complete"
      onClick={updateSection}
      icon={[GrNext, GrNext]}
      size='small'
      className="mt-3 w-1/2 mx-auto align-middle"
      buttonType="submit"
      hoverStyle={{ backgroundColor: theme.colors.accent, color: theme.colors.white }}
      backgroundColor={theme.colors.primary}
      iconPosition='right'
      iconClassName='flex justify-center items-center align-middle'
      tooltip='Next'
      ariaLabel='Next'
      currentuser={currentuser}
      sectionid={sectionid}
    />
  );
}