import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/api';

interface Project {
  id: number;
  name: string;
  description?: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name} - {project.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;