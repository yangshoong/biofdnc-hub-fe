import React, { useState } from 'react';
import { TextField, Button, Box, Alert, Fade, Container } from '@mui/material';
import useIngredientEditStore from '../model/useIngredientEditStore';

const IngredientEditForm = () => {
  const { ingredient, updateField, saveIngredient } = useIngredientEditStore();
  const [showAlert, setShowAlert] = useState(false);

  if (!ingredient) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveIngredient();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // 3초 후 알림 숨김
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ '& > :not(style)': { m: 1 } }}>
        <h1>성분 입력</h1>
        <TextField
          label="INCI Name"
          value={ingredient.inciName}
          onChange={(e) => updateField('inciName', e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Korean Name"
          value={ingredient.koreanName}
          onChange={(e) => updateField('koreanName', e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CAS No"
          value={ingredient.casNo}
          onChange={(e) => updateField('casNo', e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Efficacy"
          value={ingredient.efficacy}
          onChange={(e) => updateField('efficacy', e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            입력 완료
          </Button>
          <Fade in={showAlert}>
            <Alert 
              severity="success" 
              sx={{ flexGrow: 1 }}
            >
              성분이 입력되었습니다.
            </Alert>
          </Fade>
        </Box>
      </Box>
    </Container>
  );
};

export default IngredientEditForm;
