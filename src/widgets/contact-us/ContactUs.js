import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function ContactUs() {
  const contactInfo = [
    { id: 1, title: '진화 문의(권한, 사용법, 오류 등)', phone: '02-6121-8620, 8643' },
    { id: 2, title: '계시판 문의', details: '상단 메뉴 > Community > Help Desk 클릭 > "글쓰기" 문의' },
    { id: 3, title: '구매관련 업무 문의', details: '각 발주 구매담당자' },
    { id: 4, title: '전자계약(원가 세부내역 작성 포함)시스템 관련 문의', phone: '02-6121-8643' },
    { id: 5, title: '거래명세서,전자세금계산서 문의', phone: '02-6121-8620' },
  ];

  return (
    <>
      <Typography variant="h6">Contact Us</Typography>
      <List>
        {contactInfo.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.title}
              secondary={item.phone || item.details}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ContactUs;