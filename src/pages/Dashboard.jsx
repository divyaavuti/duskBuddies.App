import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import TaskList from '../components/TaskList';
import NotificationBadge from '../components/NotificationBadge';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Notifications */}
        <Grid item xs={12}>
          <NotificationBadge />
        </Grid>

        {/* Task List */}
        <Grid item xs={12}>
          <TaskList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
