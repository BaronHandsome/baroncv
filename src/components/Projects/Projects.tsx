import React, { useCallback } from 'react';
import _ from 'lodash';

import { Project } from '../Project';
import { StyledContainer } from './Projects.styles';
import { PROJECTS } from './Projects.data';

export const Projects = () => {
  const getProjects = useCallback(
    () =>
      _.map(PROJECTS, (project, index) => (
        <Project key={`project-${project.name}-${index}`} project={project} />
      )),
    [],
  );
  return <StyledContainer>{getProjects()}</StyledContainer>;
};
