import styled from 'styled-components';

import { COLORS } from '../utils/colors';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  margin: 20px 0;
  padding: 10px 0;
  &:hover {
    border-top: 1px solid ${COLORS.ALTO};
    border-bottom: 1px solid ${COLORS.ALTO};
  }
`;

export const StyledProjectName = styled.p`
  font-size: 45px;
  margin-top: 0;
`;

export const StyledHumansQuantity = styled.span``;

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const StyledListItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin 5px 0;
`;

export const StyledListIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

export const StyledListItem = styled.li`
  font-size: 18px;
`;

export const StyledTechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledTechnologyItemContainer = styled.div`
  padding: 6px 10px;
  background-color: ${COLORS.TURQUOISE};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const StyledTechnology = styled.span``;
