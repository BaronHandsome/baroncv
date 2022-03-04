export interface IProject {
  name: string;
  humansQuantity: number;
  projectFeatures: string[];
  technicalFeatures: string[];
  technologies: string[];
}

export const PROJECTS: ReadonlyArray<IProject> = [
  {
    name: 'NDA',
    humansQuantity: 4,
    projectFeatures: ['Social media login', 'Awesome smooth animations'],
    technicalFeatures: [
      'Architecture setup',
      'Daily communication with customer',
      'Deploying to the stores',
      'Code documentation',
    ],
    technologies: [
      'React',
      'TypeScript',
      'React Navigation',
      'Redux',
      'Redux Persist',
      'Redux Saga',
      'Axios',
      'Formik+Yup',
    ],
  },
  {
    name: 'NDA',
    humansQuantity: 6,
    projectFeatures: ['Social media login'],
    technicalFeatures: [
      'All frontend part',
      'Daily communication with customer',
      'Code documentation',
    ],
    technologies: ['React', 'Axios', 'Typescript', 'Redux', 'Formik+Yup'],
  },
  {
    name: 'NDA',
    humansQuantity: 1,
    projectFeatures: [
      'Awesome smooth animations',
      'Interactive character inventory',
    ],
    technicalFeatures: [
      'All frontend part',
      'Daily communication with customer',
      'Architecture setup',
    ],
    technologies: [
      'React',
      'Styled Components',
      'TypeScript',
      'Redux',
      'LottieFiles',
    ],
  },
  {
    name: 'NDA',
    humansQuantity: 2,
    projectFeatures: ['A lot of animations'],
    technicalFeatures: [
      'All frontend part',
      'Daily communication with customer',
      'Architecture setup',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Redux',
      'Redux Saga',
      'React-markdown',
      'React Navigation',
    ],
  },
];
