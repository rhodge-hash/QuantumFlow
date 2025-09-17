export interface User {
  id: number;
  email: string;
  is_active: boolean;
}

export interface Project {
  id: number;
  name: string;
  description?: string;
  owner_id: number;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  project_id: number;
  assignee_id?: number;
}
