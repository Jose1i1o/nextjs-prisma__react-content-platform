import styled from 'styled-components';
import { theme } from '@/theme/theme';

export const MenuContainer = styled.div`
  padding: 1rem;
  padding-top: 1.25rem;
`;

export const ModuleTitle = styled.h3`
  color: white;
  font-size: 0.875rem; 
  font-weight: medium;
`;

export const CourseTitle = styled.h2`
  color: white;
  font-size: 1.5rem; 
  font-weight: bold;
`;

export const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 0.5rem 0;
`;

export const ProgressBarContainer = styled.div`
  background-color: ${theme.colors.grey};
  width: 100%;
  height: 1rem; 
  border-radius: 9999px; 
`;

export const ProgressBar = styled.div<{ onProgress: number }>`
  background: linear-gradient(to right, #ffdb3a 0%, ${theme.colors.primary} 100%);
  height: 1rem; 
  border-radius: 9999px; 
  width: ${({ onProgress }) => `${onProgress}%`};
`;