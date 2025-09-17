import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTasks } from '../../services/api';
import { Task } from '../../schemas';

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const getTaskDetails = async () => {
      // Assuming fetchTasks can fetch a single task by ID or filter
      const allTasks = await fetchTasks();
      const foundTask = allTasks.find((t: Task) => t.id === Number(id));
      setTask(foundTask || null);
    };
    getTaskDetails();
  }, [id]);

  if (!task) {
    return <div>Loading task...</div>;
  }

  return (
    <div>
      <h2>Task Detail for ID: {task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetail;