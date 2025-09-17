const API_BASE_URL = 'http://localhost:8000';

export const fetchUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users/`);
  return response.json();
};

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE_URL}/projects/`);
  return response.json();
};

export const fetchTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks/`);
  return response.json();
};
