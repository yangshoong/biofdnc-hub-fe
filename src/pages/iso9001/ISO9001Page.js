import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import ISO9001TableOfContents from '../../features/iso9001/ui/ISO9001TableOfContents';
import ISO9001ContentDisplay from '../../features/iso9001/ui/ISO9001ContentDisplay';

const drawerWidth = 255;
const navbarHeight = 70;

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  height: `calc(100vh - ${navbarHeight}px)`,
  marginTop: `${navbarHeight}px`,
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    position: 'fixed',
    top: `${navbarHeight}px`,
    height: `calc(100% - ${navbarHeight}px)`,
    backgroundColor: theme.palette.background.default,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  overflowY: 'auto',
  height: '100%',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '800px',
  margin: '0 auto',
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
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
              primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>ISO 9001</Typography>}
              secondary={<Typography variant="body2">Table of Contents</Typography>}
            />
          </ListItem>
        </List>
        <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
          <ISO9001TableOfContents onSelectItem={handleSelectItem} />
        </Box>
      </StyledDrawer>
      <Content>
        <StyledPaper>
          <ISO9001ContentDisplay selectedItem={selectedItem} />
        </StyledPaper>
      </Content>
    </Root>
  );
};

export default ISO9001Page;