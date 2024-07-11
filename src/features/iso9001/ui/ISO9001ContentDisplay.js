import React from 'react';
import { Box, Typography } from '@mui/material';

const ISO9001ContentDisplay = ({ selectedItem }) => {
  return (
    <Box flex={1} p={1} maxHeight="calc(100vh - 160px)" overflow="auto">
      <Typography variant="h5" gutterBottom>{selectedItem || "ISO9001 문서 내용"}</Typography>
      <Typography variant="body1">
        {selectedItem 
          ? `${selectedItem}에 대한 내용이 여기에 표시됩니다.` 
          : "왼쪽 목차에서 항목을 선택하세요."}
      </Typography>
    </Box>
  );
};

export default ISO9001ContentDisplay;