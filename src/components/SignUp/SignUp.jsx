/* eslint-disable react/jsx-props-no-spreading */
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
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import MailSend from './MailSend';
import './SignUp.scoped.scss';

const SignUp = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        sx={{ minHeight: '100vh' }}
      >
        <Container maxWidth="sm">
          <Typography variant="h2" sx={{ textAlign: 'center', paddingBottom: '30px' }}>Создать аккаунт</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup
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
                {...register('name', { required: 'Поле обязательно для заполнения' })}
                error={!!errors?.name}
                helperText={errors?.name ? errors.name.message : ''}
              />
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
              <FormControlLabel
                control={<Checkbox />}
                label="Я согласен получать рассылку"
                {...register('mailDelivery')}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Я принимаю условия пользовательского соглашения"
                {...register('acceptTerms', { required: 'Необходимо принять правила пользовательского соглашения' })}
                error={!!errors?.acceptTerms}
              />
              <div className="error">{errors?.acceptTerms ? errors.acceptTerms.message : ''}</div>
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
          </form>
        </Container>
      </Grid>
    );
  }
  return <MailSend />;
};

export default SignUp;
