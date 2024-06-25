import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function Announcements() {
  const announcements = [
    { id: 1, title: '[공통공유] 자동차공용업데트_유류이', date: '2024-06-24' },
    { id: 2, title: '[협력사공지] 대전사업장 구매 담당자 변경', date: '2024-05-02' },
  ];

  return (
    <>
      <Typography variant="h6">공지사항</Typography>
      <List>
        {announcements.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.date} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Announcements;