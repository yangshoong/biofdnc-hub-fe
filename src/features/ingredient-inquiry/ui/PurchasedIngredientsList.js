import React from 'react';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { ingredients as purchasedIngredients } from '../api/purchasedIngredients';
import useIngredientNavigation from '../model/useIngredientNavigation';

function PurchasedIngredientsList({ inciName }) {
  const filteredIngredients = purchasedIngredients.filter(item => item.inciName === inciName);

  const handleEdit = (id) => {
    console.log(`Edit purchased ingredient with id: ${id}`);
    // 여기에 실제 수정 로직을 구현하세요
  };

  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        구매 성분 정보
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>제조사</TableCell>
            <TableCell>원산지</TableCell>
            <TableCell>추출 부위</TableCell>
            <TableCell>유래 부위</TableCell>
            <TableCell>캘러스 유래</TableCell>
            <TableCell>기타</TableCell>
            <TableCell style={{ width: '50px', padding: '0 8px' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredIngredients.map((purchasedIngredient) => (
            <TableRow key={purchasedIngredient.id}>
              <TableCell>{purchasedIngredient.manufacturer}</TableCell>
              <TableCell>{purchasedIngredient.origin}</TableCell>
              <TableCell>{purchasedIngredient.extractionPart}</TableCell>
              <TableCell>{purchasedIngredient.derivedPart}</TableCell>
              <TableCell>{purchasedIngredient.callusOrigin}</TableCell>
              <TableCell>{purchasedIngredient.etc}</TableCell>
              <TableCell style={{ padding: '0 8px' }}>
                <IconButton onClick={() => handleEdit(purchasedIngredient.id)} size="small">
                  <EditIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default PurchasedIngredientsList;