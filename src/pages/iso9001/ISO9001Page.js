import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ISO9001TableOfContents from '../../features/iso9001/ui/ISO9001TableOfContents';
import ISO9001ContentDisplay from '../../features/iso9001/ui/ISO9001ContentDisplay';

const drawerWidth = 255;
const navbarHeight = 70; // 네비게이션 바의 높이, 실제 값에 맞게 조정하세요

const Root = styled('div')(({ theme }) => ({
  display: 'flex', // 자식 요소들을 가로로 배치
  height: `calc(100vh - ${navbarHeight + 80}px)`, // 전체 높이에서 네비게이션 바 높이와 추가 20px를 뺀 값
  marginTop: `${navbarHeight}px`, // 네비게이션 바 높이만큼 상단 여백 추가
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    top: `${navbarHeight}px`,
    height: `calc(100% - ${navbarHeight + 20}px)`, // 20px 더 줄임
    backgroundColor: theme.palette.background.default,
  },
}));

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1, 2), // 상하, 좌우 패딩을 더 줄임
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  overflowY: 'auto',
  height: '100%',
}));

const DocumentContent = styled(Paper)(({ theme }) => ({
  width: '90%', // 80%에서 90%로 변경하여 좌우 여백을 줄임
  maxWidth: 'none',
  padding: theme.spacing(2), // 패딩을 줄임
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(2), // 하단 마진을 줄임
}));

const ISO9001Page = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <Root>
      <StyledDrawer variant="permanent" anchor="left">
        <List>
          <ListItem>
            <ListItemText 
              primary={<Typography variant="h6">ISO 9001</Typography>}
              secondary={<Typography variant="body2">Table of Contents</Typography>}
            />
          </ListItem>
        </List>
        <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
          <ISO9001TableOfContents onSelectItem={handleSelectItem} />
        </Box>
      </StyledDrawer>
      <Content>
        <DocumentContent elevation={3}>
          <ISO9001ContentDisplay selectedItem={selectedItem} />
        </DocumentContent>
      </Content>
    </Root>
  );
};

export default ISO9001Page;