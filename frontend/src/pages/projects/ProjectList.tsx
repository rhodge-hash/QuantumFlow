import React, { useEffect, useState } from 'react';
import { fetchProjects, createProject, updateProject, deleteProject } from '../../services/api';

interface Project {
  id: number;
  name: string;
  description?: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProjectName, setNewProjectName] = useState<string>('');
  const [newProjectDescription, setNewProjectDescription] = useState<string>('');
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [editedProjectName, setEditedProjectName] = useState<string>('');
  const [editedProjectDescription, setEditedProjectDescription] = useState<string>('');

  const getProjects = async () => {
    const data = await fetchProjects();
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleCreateProject = async () => {
    if (newProjectName.trim()) {
      await createProject({ name: newProjectName, description: newProjectDescription });
      setNewProjectName('');
      setNewProjectDescription('');
      getProjects(); // Refresh the list
    }
  };

  const handleEditClick = (project: Project) => {
    setEditingProjectId(project.id);
    setEditedProjectName(project.name);
    setEditedProjectDescription(project.description || '');
  };

  const handleUpdateProject = async (projectId: number) => {
    if (editedProjectName.trim()) {
      await updateProject(projectId, { name: editedProjectName, description: editedProjectDescription });
      setEditingProjectId(null);
      setEditedProjectName('');
      setEditedProjectDescription('');
      getProjects(); // Refresh the list
    }
  };

  const handleDeleteProject = async (projectId: number) => {
    await deleteProject(projectId);
    getProjects(); // Refresh the list
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Project List</h2>

      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        <h3>Create New Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          style={{ marginRight: '10px', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
          style={{ marginRight: '10px', padding: '8px', borderRadius: '3px', border: '1px solid #ddd' }}
        />
        <button
          onClick={handleCreateProject}
          style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          Add Project
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {Array.isArray(projects) && projects.map(project => (
          <li key={project.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {editingProjectId === project.id ? (
              <div style={{ flexGrow: 1 }}>
                <input
                  type="text"
                  value={editedProjectName}
                  onChange={(e) => setEditedProjectName(e.target.value)}
                  style={{ marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
                <input
                  type="text"
                  value={editedProjectDescription}
                  onChange={(e) => setEditedProjectDescription(e.target.value)}
                  style={{ marginRight: '10px', padding: '5px', borderRadius: '3px', border: '1px solid #ddd' }}
                />
                <button
                  onClick={() => handleUpdateProject(project.id)}
                  style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingProjectId(null)}
                  style={{ padding: '5px 10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div style={{ flexGrow: 1 }}>
                <strong>{project.name}</strong> - {project.description}
              </div>
            )}
            <div>
              <button
                onClick={() => handleEditClick(project)}
                style={{ padding: '5px 10px', backgroundColor: '#ffc107', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project.id)}
                style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;