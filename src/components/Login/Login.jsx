import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  FormGroup,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from '../../store/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Поле обязательно для заполнения'),
    password: Yup.string()
      .required('Поле обязательно для заполнения'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

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
          return alert('Введены неверные данные');
        }
        localStorage.setItem('accessToken', responseData.accessToken);
        return navigate('/profile');
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" sx={{ textAlign: 'center', paddingBottom: '30px' }}>Войти</Typography>
      <FormGroup
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="email"
          label="E-mail"
          size="normal"
          margin="normal"
          fullWidth
        />
        <TextField
          id="password"
          label="Пароль"
          type="password"
          size="normal"
          margin="normal"
          fullWidth
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
    </Container>
  );
};

export default Login;
