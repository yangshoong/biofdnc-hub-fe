import React from 'react';
import { Grid, Paper, Typography, Container } from '@mui/material';
import Announcements from '../widgets/announcements/Announcements';
import HelpDesk from '../widgets/help-desk/HelpDesk';
import PerformanceChart from '../widgets/performance-chart/PerformanceChart';
import ToDoList from '../widgets/to-do-list/ToDoList';
import ContactUs from '../widgets/contact-us/ContactUs';

function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Main화면</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Announcements />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <HelpDesk />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <PerformanceChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <ToDoList />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <ContactUs />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;