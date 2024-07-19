import React, { useEffect, useState } from 'react';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { products } from '../api/products';
// import useProductStore from '../model/useProductStore';

function ProductSearchList() {
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    number: '',
    name: '',
    shortName: '',
    structure: '',
    purchaseGroup: ''
  });

  const setFilter = (key, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
  };

  useEffect(() => {
    // fetchProducts();
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <TextField
          label="품번"
          variant="outlined"
          value={filters.number}
          onChange={(e) => setFilter('number', e.target.value)}
        />
        <TextField
          label="품명"
          variant="outlined"
          value={filters.name}
          onChange={(e) => setFilter('name', e.target.value)}
        />
        <TextField
          label="규격"
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
              <TableCell>품번</TableCell>
              <TableCell>품명</TableCell>
              <TableCell>규격</TableCell>
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
            {searchResults.map((product, index) => (
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
    </>
  );
}

export default ProductSearchList;