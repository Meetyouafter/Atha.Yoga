/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  FormGroup,
  Grid,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../store/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(responseData => {
        dispatch(getUserData(responseData));
        if (responseData.user === undefined) {
          // eslint-disable-next-line no-alert
          return alert('Введены неверные данные');
        }
        localStorage.setItem('accessToken', responseData.accessToken);
        return navigate('/profile');
      });
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ minHeight: '100vh' }}
    >
      <Container maxWidth="sm">
        <Typography variant="h2" sx={{ textAlign: 'center', paddingBottom: '30px' }}>Войти</Typography>

        <form style={{ height: '300px' }} onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <TextField
              id="email"
              label="E-mail"
              size="normal"
              margin="normal"
              fullWidth
              {...register('email', {
                required: 'Поле обязательно для заполнения',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid',
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : ''}
            />
            <TextField
              id="password"
              label="Пароль"
              type="password"
              size="normal"
              margin="normal"
              fullWidth
              {...register('password', {
                required: 'Поле обязательно для заполнения',
                pattern: {
                  value: /.{10,}/,
                  message: 'Пароль должен содержать не менее 10 символов',
                },
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : ''}
            />
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{
                marginTop: '50px',
                marginBottom: '20px',
                padding: '15px',
                width: '70%',
              }}
            >
              Войти
            </Button>
          </FormGroup>
        </form>
      </Container>
    </Grid>
  );
};

export default Login;
