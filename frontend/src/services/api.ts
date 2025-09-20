const API_BASE_URL = 'http://localhost:8000';

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users/`);
  return response.json();
};

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects/`);
  return response.json();
};

export const createProject = async (projectData: { name: string; description?: string }) => {
  const response = await fetch(`${API_BASE_URL}/projects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  return response.json();
};

export const updateProject = async (projectId: number, projectData: { name?: string; description?: string }) => {
  const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  });
  return response.json();
};

export const deleteProject = async (projectId: number) => {
  const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const fetchTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks/`);
  return response.json();
};
