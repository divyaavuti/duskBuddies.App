import React from 'react';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const tasks = [
    { id: 1, description: 'Clean the kitchen', completed: false },
    { id: 2, description: 'Vacuum the house', completed: true },
  ];

  const handleToggle = (id) => {
    console.log(`Toggle task ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete task ${id}`);
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} secondaryAction={
          <IconButton edge="end" onClick={() => handleDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        }>
          <Checkbox
            edge="start"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <ListItemText primary={task.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
