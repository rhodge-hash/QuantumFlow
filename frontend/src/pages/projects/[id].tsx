import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjects, fetchTasks } from '../../services/api';
import { Project, Task } from '../../schemas';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getProjectDetails = async () => {
      // Assuming fetchProjects can fetch a single project by ID or filter
      const allProjects = await fetchProjects();
      const foundProject = allProjects.find((p: Project) => p.id === Number(id));
      setProject(foundProject || null);

      // Assuming fetchTasks can fetch tasks for a specific project
      const allTasks = await fetchTasks();
      const projectTasks = allTasks.filter((t: Task) => t.project_id === Number(id));
      setTasks(projectTasks);
    };
    getProjectDetails();
  }, [id]);

  if (!project) {
    return <div>Loading project...</div>;
  }

  return (
    <div>
      <h2>Project Detail for ID: {project.name}</h2>
      <p>{project.description}</p>
      <h3>Tasks:</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
