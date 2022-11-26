import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import vk from './../../assets/images/SignIn/vk.png';
import yandex from './../../assets/images/SignIn/yandex.png';
import facebook from './../../assets/images/SignIn/facebook.png';
import google from './../../assets/images/SignIn/google.png';
import './SignInScreens.scoped.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addNewUser } from '../store/autorizationSlice.js';

const SignInScreen = () => {
  const users = useSelector((state) => state.autorization.users);
  const dispatch = useDispatch();
  console.log(users);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    dispatch(
      addNewUser({
        ...data,
        id: data.email,
      })
    );
  };

  return (
    <div className='signIn_container'>
      <h1 className='signIn_title'>Создать аккаунт</h1>
      <div className='signIn_body_container'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='signIn_register_form'
        >
          <div className='form-group'>
            <TextField
              sx={{ m: 2, width: '37ch', height: '5ch' }}
              {...register('email')}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id='email'
              label='E-mail'
              type='search'
            />
            <div className='invalid-feedback'>{errors.email?.message}</div>
          </div>

          <div className='form-group'>
            <TextField
              sx={{ m: 2, width: '37ch', height: '5ch' }}
              {...register('password')}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id='outlined-password-input'
              label='Пароль'
              type='password'
              autoComplete='current-password'
            />
            <div className='invalid-feedback'>{errors.password?.message}</div>
          </div>

          <div className='form-group form-check'>
            <input
              name='acceptTerms'
              type='checkbox'
              {...register('acceptTerms')}
              className={`form-check-input ${
                errors.acceptTerms ? 'is-invalid' : ''
              }`}
            />
              <span className='apply_term'>Я принимаю условия</span> 
              <a href='#'>пользовательского соглашения</a>

            <div className='invalid-feedback'>
              {errors.acceptTerms?.message}
            </div>
          </div>

          <div className='form-group'>
            <button type='submit' className='prime_btn'>
              <span className='btn_text'>СОЗДАТЬ</span>
            </button>
          </div>
        </form>
        <div className='footer_container'>
          <div className='footer'>Уже есть аккаунт?</div>
          <a href='#'>Войти</a>
        </div>
        Или войти с помощью
        <div>
          <img className='logo' src={facebook} alt='facebook' />
          <img className='logo' src={google} alt='google' />
          <img className='logo' src={yandex} alt='yandex' />
          <img className='logo' src={vk} alt='vk' />
        </div>
      </div>
    </div>
  );
};

const SignInScreens = () => {
  return <SignInScreen />;
};

export default SignInScreens;
