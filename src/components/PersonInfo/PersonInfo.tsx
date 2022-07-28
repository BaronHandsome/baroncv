import React from 'react';

import {
  StyledContainer,
  StyledPersonName,
  StyledProfession,
} from './PersonInfo.styles';

export const PersonInfo = () => {
  return (
    <StyledContainer>
      <StyledPersonName>Alexander Shebanov</StyledPersonName>
      <StyledProfession>Junior React developer</StyledProfession>
    </StyledContainer>
  );
};
