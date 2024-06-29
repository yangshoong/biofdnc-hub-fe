import React from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import useIngredientNavigation from '../model/useIngredientNavigation';

function IngredientListItem({ ingredient, index }) {
  const { navigateToIngredientEdit } = useIngredientNavigation();

  const handleEdit = () => {
    navigateToIngredientEdit(ingredient.inciName);
  };

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{ingredient.inciName}</TableCell>
      <TableCell>{ingredient.koreanName}</TableCell>
      <TableCell>{ingredient.casNo}</TableCell>
      <TableCell>{ingredient.efficacy}</TableCell>
      <TableCell>
        <IconButton onClick={handleEdit} size="small">
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default IngredientListItem;