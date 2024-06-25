import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function ToDoList() {
  const todoItems = [
    { id: 1, task: '발주조회/승인', count: 0 },
    { id: 2, task: '전자계약서작성', count: 0 },
    { id: 3, task: '납품예정확인', count: 0 },
    { id: 4, task: '품질이상확인', count: 0 },
    { id: 5, task: '품질이상미종료', count: 0 },
    { id: 6, task: '초과품목 미등록', count: 0 },
    { id: 7, task: 'PQCR 미등록', count: 0 },
    { id: 8, task: '물품납품확인', count: 0 },
  ];

  return (
    <>
      <Typography variant="h6">To-Do List</Typography>
      <List>
        {todoItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={`${item.task} (${item.count})`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ToDoList;