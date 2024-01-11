import { GrNext } from "react-icons/gr";
import { theme } from '@/theme/theme';
import Button from "./Button";
import { FC, useCallback } from "react";
import toast from "react-hot-toast";
import { useModuleStore } from "@/app/context/store";

interface AccountUser {
  currentUser: {
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
  sectionId: string;
}

export const SetToCompleteButton: FC<AccountUser & Section> = ({ currentUser, sectionId }) => {

  const { updateCurrentModule } = useModuleStore();  

  const updateSection = useCallback(async () => {
    const userId = currentUser?.id;
    const completionStatus = "completed";

    try {
      const response = await fetch('/api/section', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          sectionId,
          completionStatus,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const { success, error } = data;
      
      if (success && !error) {
        updateCurrentModule(sectionId);
        toast.success('Section completed!');
      } 
      if (error && !success) {
        toast.error('Error. Failed to update section progress');
      }
    } catch (error) {
      toast.error('Error. Failed to update section progress');
      console.error('Error updating section', error);
    }
  }, [currentUser, sectionId, updateCurrentModule]);

  return (
    <Button 
      outline={true}
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
      currentUser={currentUser}
      sectionId={sectionId}
    />
  );
}