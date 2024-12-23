import React from 'react';
import { AppBar, Toolbar, Typography, Tooltip } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DustBuddies
        </Typography>
        <Tooltip title="Dashboard">
          <DashboardIcon sx={{ mx: 1.5 }} />
        </Tooltip>
        <Tooltip title="Manage people">
          <PeopleIcon sx={{ mx: 1.5 }} />
        </Tooltip>
        <Tooltip title="Add task">
          <AddTaskIcon sx={{ mx: 1.5}} />
        </Tooltip>
        <Tooltip title="Logout">
          <LogoutIcon sx={{ mx: 1.5 }} />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
