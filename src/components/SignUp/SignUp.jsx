import React, { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Container,
  Stack,
  FormGroup,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import MailSend from './MailSend';

const SignUp = () => {
  const [isSuccess, setIsSuccess] = useState(true);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле обязательно для заполнения'),
    email: Yup.string()
      .required('Поле обязательно для заполнения')
      .email('Пожалуйста, введите действительный адрес электронной почты (например, name@yandex.ru)'),
    password: Yup.string()
      .required('Поле обязательно для заполнения')
      .min(10, 'Пароль должен быть не меньше 10 символов'),
    acceptTerms: Yup.bool().oneOf(
      [true],
      'Необходимо принять правила пользовательского соглашения',
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    //  console.log(JSON.stringify(data, null, 2));
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(() => setIsSuccess(true));
  };

  if (!isSuccess) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h2" sx={{ textAlign: 'center', paddingBottom: '30px' }}>Создать аккаунт</Typography>
        <FormGroup
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          minHeight="100vh"
          sx={{
            border: '1px solid #E0E0E0',
            borderRadius: '4px',
            padding: '20px',
          }}
        >
          <TextField
            id="name"
            label="Имя"
            size="normal"
            margin="normal"
            fullWidth
          />
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
          <FormControlLabel control={<Checkbox />} label="Я согласен получать рассылку" />
          <FormControlLabel control={<Checkbox />} label="Я принимаю условия пользовательского соглашения" />
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ marginTop: '50px', marginBottom: '20px', padding: '15px' }}
          >
            Создать
          </Button>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Typography varinat="subtitle1">Уже есть аккаунт?</Typography>
            <Typography varinat="subtitle2" component={Link} to="/login">Войти</Typography>
          </Stack>
        </FormGroup>
      </Container>
    );
  }
  return <MailSend />;
};

export default SignUp;
