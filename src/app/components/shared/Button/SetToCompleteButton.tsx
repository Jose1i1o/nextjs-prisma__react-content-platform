import { GrNext } from "react-icons/gr";
import { theme } from '@/theme/theme';
import Button from "./Button";
import { useCallback, useEffect, useState } from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { useUserStore } from "@/app/context/store";

export const SetToCompleteButton = async() => {
  
  const { currentUser, setCurrentUser } = useUserStore();

  const updateSection = async () => {

    // need to complete this
    console.log('currentUser????', currentUser);
    
    
    // const completionStatus = "completed";

    // try {
    //   const response = await fetch('/api/updateSection', { // Replace with your actual API endpoint
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       userId,
    //       sectionId,
    //       completionStatus,
    //     }),
    //   });

    //   const data = await response.json();
    //   if (response.ok) {
    //     console.log('Section updated successfully', data);
    //     // Handle successful update here, like showing a notification or updating state
    //   } else {
    //     console.error('Failed to update section', data);
    //     // Handle failure here, like showing an error message
    //   }
    // } catch (error) {
    //   console.error('Error updating section', error);
    //   // Handle network errors here
    // }
  // }, []);
  }

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
    />
  );
}