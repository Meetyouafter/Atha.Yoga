import React, { useState } from 'react';
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import MailSend from './MailSend/MailSend';
import vk from '../../assets/images/SignIn/vk.png';
import yandex from '../../assets/images/SignIn/yandex.png';
import facebook from '../../assets/images/SignIn/facebook.png';
import google from '../../assets/images/SignIn/google.png';
import './SignUp.scoped.scss';

const SignUp = () => {
  const [majorPage, setMajorPage] = useState('major');

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
    }).then(res => res.json());
    setMajorPage('checked');
  };

  if (majorPage === 'major') {
    return (
      <div className="container">
        <div className="title">Регистрация</div>
        <div className="body_container">
          <form onSubmit={handleSubmit(onSubmit)} className="register_form">
            <div className="form-group">
              <TextField
                {...register('name')}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                label="Имя *"
                type="search"
                size="normal"
                margin="normal"
                fullWidth
              />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <div className="form-group">
              <TextField
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                label="Электронная почта *"
                type="search"
                size="normal"
                margin="normal"
                fullWidth
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group">
              <TextField
                {...register('password')}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
                id="outlined-password-input"
                label="Пароль *"
                type="password"
                autoComplete="current-password"
                size="normal"
                fullWidth
                margin="normal"
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group check_item">
              <FormControlLabel
                control={(
                  <Checkbox
                    className={`form-check-input ${
                      errors.acceptTerms ? 'is-invalid' : ''
                    }`}
                  />
                )}
                label="Я принимаю условия пользовательского соглашения"
                {...register('acceptTerms')}
              />
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              className="prime_btn"
              sx={{ marginTop: '50px', padding: '10px' }}
            >
              Создать
            </Button>
          </form>
          <div className="account_container">
            <span>Уже есть аккаунт?</span>
            <Link to="/login">Войти</Link>
          </div>
          <div className="footer_container">
            Или войти с помощью
            <div className="img_container">
              <img src={facebook} alt="facebook" />
              <img src={google} alt="google" />
              <img src={yandex} alt="yandex" />
              <img src={vk} alt="vk" />
            </div>
          </div>
          <div className="footer">
            Нажимая на кнопку «Создать», я подтверждаю, что ознакомлен(а) с
            пользовательским соглашением
          </div>
        </div>
      </div>
    );
  }
  return <MailSend />;
};

export default SignUp;
