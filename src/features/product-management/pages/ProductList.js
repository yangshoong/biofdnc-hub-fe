import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab } from '@mui/material';
import products from '../data/products'; // products 데이터를 import

function ProductList() {
  return (
    <Box>
      <Tabs value={0} indicatorColor="primary" textColor="primary">
        <Tab label="제품조회" />
      </Tabs>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: 2 }}>
        제품관리
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>자재번호</TableCell>
              <TableCell>자재내역</TableCell>
              <TableCell>자재내역(약호)</TableCell>
              <TableCell>기본단위</TableCell>
              <TableCell>자재유형</TableCell>
              <TableCell>자재그룹</TableCell>
              <TableCell>계층구조</TableCell>
              <TableCell>납품소요시간(일)</TableCell>
              <TableCell>구매그룹</TableCell>
              <TableCell>작성일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.number}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.shortName}</TableCell>
                <TableCell>{product.structure}</TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>{product.group}</TableCell>
                <TableCell>{product.structure}</TableCell>
                <TableCell>{product.leadTime}</TableCell>
                <TableCell>{product.purchaseGroup}</TableCell>
                <TableCell>{product.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductList;