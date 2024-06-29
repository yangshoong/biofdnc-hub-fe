export const createIngredient = (data) => ({
  inciName: data.inciName || '',
  koreanName: data.koreanName || '',
  casNo: data.casNo || '',
  efficacy: data.efficacy || '',
});