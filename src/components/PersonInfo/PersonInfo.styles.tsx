import styled from 'styled-components';

import { COLORS } from '../utils/colors';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background-color: ${COLORS.SCORPION};
  height: 150px;
`;

export const StyledPersonName = styled.h1`
  color: ${COLORS.WHITE};
  text-transform: uppercase;
  font-weight: 600;
`;

export const StyledProfession = styled.h2`
  color: ${COLORS.WHITE};
`;
