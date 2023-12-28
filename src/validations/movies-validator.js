export const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "El titulo es requerido";
  }

  if (!values.rating) {
    errors.rating = "El rating es requerido";
  }

  if (!values.awards) {
    errors.awards = "Los premios son requeridos";
  }

  if (!values.length) {
    errors.length = "Duraccion de película requerido";
  }

  if (!values.release_date) {
    errors.release_date = "Fecha de estreno requerida";
  }

  if (!values.genre_id) {
    errors.genre_id = "Género requerido";
  }
  return errors;
};
