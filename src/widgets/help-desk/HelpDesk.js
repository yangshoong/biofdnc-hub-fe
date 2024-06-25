import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

function HelpDesk() {
  const helpDeskItems = [
    { id: 1, title: '[공유 문의 및 보안] 부서 이동으로 인한 권한 삭제 관련 협조 요청', date: '2024-06-21' },
    { id: 2, title: 'TODO와 타임라인 자료 연동의 오류', date: '2024-06-18' },
    // ... 더 많은 항목 추가
  ];

  return (
    <>
      <Typography variant="h6">Help Desk(Q/A)</Typography>
      <List>
        {helpDeskItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.title} secondary={item.date} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default HelpDesk;