import { createContext, useContext } from 'react';
import { projectData } from '../lib/projectData';

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);
}
