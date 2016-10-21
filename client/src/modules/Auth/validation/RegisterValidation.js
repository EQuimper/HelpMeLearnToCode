export const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required!';
  } else if (values.username.length < 3) {
    errors.username = 'Must be 3 charaters at least!';
  } else if (values.username.length > 8) {
    errors.username = 'Must be 8 characters or less!';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!';
  }

  if (!values.password) {
    errors.password = 'Required!';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)) {
    errors.password = 'Must have 1 number and 6 characters!';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'You need to confirm your password!';
  } if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Your password don\'t match! Plz confirm your password!';
  }

  return errors;
}
