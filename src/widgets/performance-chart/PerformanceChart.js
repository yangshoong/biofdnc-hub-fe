import React from 'react';
import { Typography, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PerformanceChart() {
  const data = [
    { name: '당일누계', PO: 1, 예정: 1, 납품: 1 },
    { name: '당월누계', PO: 14, 예정: 12, 납품: 12 },
  ];

  const chartTitles = ['06/25 당일', '주간누계', '당월누계', '년간누계'];

  return (
    <>
      <Typography variant="h6">발주납품현황현황</Typography>
      <Grid container spacing={2}>
        {chartTitles.map((title, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography variant="subtitle1">{title}</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={[data[index % 2]]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="PO" fill="#8884d8" />
                <Bar dataKey="예정" fill="#82ca9d" />
                <Bar dataKey="납품" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PerformanceChart;