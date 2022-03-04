import React, { useCallback } from 'react';
import _ from 'lodash';

import {
  StyledContainer,
  StyledProjectName,
  StyledHumansQuantity,
  StyledList,
  StyledListItemContainer,
  StyledListIcon,
  StyledListItem,
  StyledTechnologiesContainer,
  StyledTechnologyItemContainer,
  StyledTechnology,
} from './Project.styles';
import { IProps } from './Project.props';
import { PROJECT_ICONS } from '../../assets';

export const Project = ({ project }: IProps) => {
  const getFeatures = useCallback(
    (features: string[], listIcon: string) =>
      _.map(features, (item) => (
        <StyledListItemContainer key={`feature-${item}`}>
          <StyledListIcon src={getListIcon(listIcon)} />
          <StyledListItem>{item}</StyledListItem>
        </StyledListItemContainer>
      )),
    [],
  );

  const getListIcon = useCallback((icon: string) => {
    switch (icon) {
      case 'brain':
        return PROJECT_ICONS.BRAIN_ICON_SVG;

      case 'gear':
        return PROJECT_ICONS.GEAR_ICON_SVG;
    }
  }, []);

  const getTechnologies = useCallback(
    () =>
      _.map(project.technologies, (technology) => (
        <StyledTechnologyItemContainer key={`technology-${technology}`}>
          <StyledTechnology>{technology}</StyledTechnology>
        </StyledTechnologyItemContainer>
      )),
    [],
  );

  return (
    <StyledContainer>
      <StyledProjectName>{project.name}</StyledProjectName>
      <StyledHumansQuantity>
        {project.humansQuantity} humans
      </StyledHumansQuantity>
      <StyledList>{getFeatures(project.projectFeatures, 'brain')}</StyledList>
      <StyledList>{getFeatures(project.technicalFeatures, 'gear')}</StyledList>
      <StyledTechnologiesContainer>
        {getTechnologies()}
      </StyledTechnologiesContainer>
    </StyledContainer>
  );
};
