import React from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const tableOfContents = [
  {
    title: "1. 총칙",
    subItems: ["1.1. 목적", "1.2. 용어의 정의"]
  },
  {
    title: "2. 조직 및 인적 자원 관리",
    subItems: ["2.1. 조직의 구성", "2.2. 직원의 책임", "2.3. 교육 훈련", "2.4. 직원의 위생"]
  },
  {
    title: "3. 시설 및 설비 관리",
    subItems: ["3.1. 시설 기준", "3.2. 설비 및 기구의 위생관리"]
  },
  {
    title: "4. 원부자재 및 제조 관리",
    subItems: ["4.1. 원부자재의 관리", "4.2. 출고 관리", "4.3. 보관 관리", "4.4. 물의 품질", "4.5. 제조 관리"]
  },
  {
    title: "5. 품질관리",
    subItems: ["5.1. 시험관리", "5.2. 검체의 채취 및 보관", "5.3. 폐기처리", "5.4. 위탁 계약", "5.5. 일탈관리", "5.6. 불만처리", "5.7. 제품 회수", "5.8. 변경관리", "5.9. 내부감사", "5.10. 문서관리"]
  }
];

const ISO9001TableOfContents = ({ onSelectItem }) => {
  const [open, setOpen] = React.useState({});

  const handleClick = (title) => {
    setOpen(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <List component="nav" sx={{ width: '250px', borderRight: '1px solid #ccc' }}>
      {tableOfContents.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem button onClick={() => handleClick(item.title)}>
            <ListItemText primary={item.title} />
            {open[item.title] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[item.title]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subItems.map((subItem, subIndex) => (
                <ListItem button sx={{ pl: 4 }} key={subIndex} onClick={() => onSelectItem(subItem)}>
                  <ListItemText primary={subItem} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default ISO9001TableOfContents;