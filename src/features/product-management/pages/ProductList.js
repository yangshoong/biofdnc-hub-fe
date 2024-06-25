import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tabs, Tab, TextField } from '@mui/material';
import products from '../data/products'; // products 데이터를 import
import useProductStore from '../store/useProductStore';

function ProductList() {
  const { filters, setFilter } = useProductStore();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        (product.number || '').toLowerCase().includes(filters.number.toLowerCase()) &&
        (product.name || '').toLowerCase().includes(filters.name.toLowerCase()) &&
        (product.shortName || '').toLowerCase().includes(filters.shortName.toLowerCase()) &&
        (product.structure || '').toLowerCase().includes(filters.structure.toLowerCase()) &&
        (product.purchaseGroup || '').toLowerCase().includes(filters.purchaseGroup.toLowerCase())
      )
    );
  }, [filters]);

  return (
    <Box sx={{ padding: '0 100px' }}>
      <Tabs value={0} indicatorColor="primary" textColor="primary">
        <Tab label="제품관리" />
      </Tabs>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: 2 }}>
        제품조회
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <TextField
          label="자재번호"
          variant="outlined"
          value={filters.number}
          onChange={(e) => setFilter('number', e.target.value)}
        />
        <TextField
          label="자재내역"
          variant="outlined"
          value={filters.name}
          onChange={(e) => setFilter('name', e.target.value)}
        />
        <TextField
          label="자재내역(약호)"
          variant="outlined"
          value={filters.shortName}
          onChange={(e) => setFilter('shortName', e.target.value)}
        />
        <TextField
          label="계층구조"
          variant="outlined"
          value={filters.structure}
          onChange={(e) => setFilter('structure', e.target.value)}
        />
        <TextField
          label="구매그룹"
          variant="outlined"
          value={filters.purchaseGroup}
          onChange={(e) => setFilter('purchaseGroup', e.target.value)}
        />
      </Box>
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
            {filteredProducts.map((product, index) => (
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