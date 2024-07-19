import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import ProductSearchList from '../../features/product-management/ui/ProductSearchList';

function ProductSearchPage() {
  return (
    <Box sx={{ padding: '0 100px' }}>
      <Tabs value={0} indicatorColor="primary" textColor="primary">
        <Tab label="제품관리" />
      </Tabs>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: 2 }}>
        제품조회
      </Typography>
      <ProductSearchList />
    </Box>
  );
}

export default ProductSearchPage;