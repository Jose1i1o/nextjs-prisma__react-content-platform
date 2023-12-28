import styled from 'styled-components';
import { theme } from '@/theme/theme';


export const StyledFirstLetterInParagraph = styled.p`
  &::first-letter {
    float: inline-start;
    margin-right: 4px;
    line-height: 1;
    font-size: 2.5rem;
    color: ${theme.colors.primary};
  }
`;