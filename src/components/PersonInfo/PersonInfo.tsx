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
      <StyledProfession>Middle React developer</StyledProfession>
    </StyledContainer>
  );
};
