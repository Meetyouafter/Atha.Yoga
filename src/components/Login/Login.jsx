import React from 'react';
import { TextField, Button } from '@mui/material';
import vk from './../../assets/images/SignIn/vk.png';
import yandex from './../../assets/images/SignIn/yandex.png';
import facebook from './../../assets/images/SignIn/facebook.png';
import google from './../../assets/images/SignIn/google.png';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../store/autorizationSlice.js';
import './Login.scoped.scss';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    dispatch(
      addNewUser({
        ...data,
        id: data.email,
      })
    );
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  const { handleSubmit, register } = useForm();

  return (
    <div className='container'>
      <div className='title'>Войти</div>
      <div className='body_container'>
        <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <TextField
              {...register('email')}
              className='form-control'
              id='email'
              label='Электронная почта'
              type='search'
              size='normal'
              margin='normal'
              fullWidth
            />
          </div>
          <div className='form-group'>
            <TextField
              {...register('password')}
              className='form-control'
              id='outlined-password-input'
              label='Пароль'
              type='password'
              autoComplete='current-password'
              size='normal'
              fullWidth
              margin='normal'
            />
          </div>
          <Button
            variant='contained'
            type='submit'
            fullWidth
            className='prime_btn'
            sx={{ marginTop: '50px', padding: '10px' }}
          >
            Войти
          </Button>
        </form>
        <div className='footer_container'>
          Или войти с помощью
          <div className='img_container'>
            <img src={facebook} alt='facebook' />
            <img src={google} alt='google' />
            <img src={yandex} alt='yandex' />
            <img src={vk} alt='vk' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
