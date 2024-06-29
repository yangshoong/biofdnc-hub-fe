import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';
import { ingredients } from '../../features/ingredient-inquiry/api/ingredients';

function IngredientDetailPage() {
  const { inciName } = useParams();
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    if (inciName) {
      const foundIngredient = ingredients.find(item => item.inciName === inciName);
      if (foundIngredient) {
        setIngredient(foundIngredient);
      } else {
        navigate('/ingredient-inquiry', { replace: true });
      }
    } else {
      // If no inciName is provided, we're creating a new ingredient
      setIngredient({
        inciName: '',
        koreanName: '',
        casNo: '',
        efficacy: ''
      });
    }
  }, [inciName, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIngredient(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated or new ingredient data to your backend
    console.log('Ingredient data:', ingredient);
    navigate('/ingredient-inquiry');
  };

  if (!ingredient) return null;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {inciName ? 'Edit Ingredient' : 'Register New Ingredient'}
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="INCI Name"
        name="inciName"
        value={ingredient.inciName}
        onChange={handleChange}
        disabled={!!inciName}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Korean Name"
        name="koreanName"
        value={ingredient.koreanName}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="CAS No."
        name="casNo"
        value={ingredient.casNo}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Efficacy"
        name="efficacy"
        value={ingredient.efficacy}
        onChange={handleChange}
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {inciName ? 'Update' : 'Register'}
      </Button>
    </Box>
  );
}

export default IngredientDetailPage;