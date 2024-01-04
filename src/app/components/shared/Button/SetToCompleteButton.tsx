import { GrNext } from "react-icons/gr";
import { theme } from '@/theme/theme';
import Button from "./Button";

export const SetToCompleteButton = () => {
  return (
    <Button 
      outline={true}
      label="Complete"
      onClick={() => console.log("Next")}
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