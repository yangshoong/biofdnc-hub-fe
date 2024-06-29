import React from 'react';
import IngredientRow from './IngredientRow';
import { 
  Box, Typography, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Tabs, Tab, TextField, Pagination
} from '@mui/material';
import useIngredientStore from '../model/useIngredientStore';
import styles from './IngredientList.module.css';

function IngredientList() {
  const { filters, setFilter, filteredIngredients, page, setPage, itemsPerPage } = useIngredientStore();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleKeyDown = (event, key) => {
    if (event.key === 'Escape') {
      setFilter(key, '');
    }
  };

  const filterFields = [
    { key: 'inciName', label: 'INCI Name' },
    { key: 'koreanName', label: '한글명' },
    { key: 'casNo', label: 'CAS No.' },
    { key: 'efficacy', label: '효능' },
  ];

  const paginatedIngredients = filteredIngredients.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box className={styles.container}>
      <Tabs value={0} indicatorColor="primary" textColor="primary">
        <Tab label="성분관리" sx={{ fontSize: '1.2rem' }} />
      </Tabs>
      <Typography 
        variant="h6" 
        component="div" 
        className={styles.title}
        sx={{ 
          fontSize: '1.1rem', 
          marginTop: '16px',
          marginBottom: '16px'
        }}
      >
        성분조회
      </Typography>
      <Box className={styles.filterContainer}>
        {filterFields.map(({ key, label }) => (
          <TextField
            key={key}
            label={label}
            variant="outlined"
            value={filters[key] || ''}
            onChange={(e) => setFilter(key, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, key)}
          />
        ))}
      </Box>
      <Box className={styles.tableContainer}>
        <Box className={styles.tableWrapper}>
          <TableContainer component={Paper} style={{ maxHeight: '100%', overflow: 'auto', width: '100%' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow className={styles.tableRow}>
                  <TableCell className={styles.tableCell}>No.</TableCell>
                  {filterFields.map(({ label }) => (
                    <TableCell key={label} className={styles.tableCell}>{label}</TableCell>
                  ))}
                  <TableCell className={styles.tableCell}>수정</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedIngredients.map((ingredient, index) => (
                  <IngredientRow
                    key={ingredient.inciName}
                    ingredient={ingredient}
                    index={(page - 1) * itemsPerPage + index + 1}
                    filterFields={filterFields}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box className={styles.paginationContainer}>
          <Pagination
            count={Math.ceil(filteredIngredients.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default IngredientList;
