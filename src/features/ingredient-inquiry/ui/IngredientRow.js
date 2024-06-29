import React, { useState } from 'react';
import {
  TableCell,
  TableRow,
  IconButton,
  Collapse,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { ingredients as purchasedIngredients } from '../api/purchasedIngredients';
import PurchasedIngredientsList from './PurchasedIngredientsList';
import styles from './IngredientList.module.css';
import useIngredientNavigation from '../model/useIngredientNavigation';

function IngredientRow({ ingredient, index, filterFields }) {
  const [expanded, setExpanded] = useState(false);
  const { navigateToIngredientEdit } = useIngredientNavigation();

  const hasPurchasedIngredients = purchasedIngredients.some(
    item => item.inciName === ingredient.inciName
  );

  const toggleExpand = () => {
    if (hasPurchasedIngredients) {
      setExpanded(!expanded);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigateToIngredientEdit(ingredient.inciName);
  };

  return (
    <React.Fragment>
      <TableRow 
        className={styles.tableRow} 
        onClick={toggleExpand}
        style={{ cursor: hasPurchasedIngredients ? 'pointer' : 'default' }}
      >
        <TableCell className={styles.tableCell}>{index}</TableCell>
        {filterFields.map(({ key }) => (
          <TableCell key={key} className={styles.tableCell}>
            {ingredient[key]}
          </TableCell>
        ))}
        <TableCell className={styles.tableCell} style={{ width: '80px' }}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <IconButton onClick={handleEdit} size="small">
              <EditIcon />
            </IconButton>
            {hasPurchasedIngredients && (
              <IconButton size="small" onClick={(e) => {
                e.stopPropagation();
                toggleExpand();
              }}>
                <ExpandMoreIcon
                  className={`${styles.expandIcon} ${expanded ? styles.expanded : ''}`}
                />
              </IconButton>
            )}
          </Box>
        </TableCell>
      </TableRow>
      {hasPurchasedIngredients && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={filterFields.length + 2}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <PurchasedIngredientsList inciName={ingredient.inciName} />
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
}

export default IngredientRow;