import React from 'react';
import { TextField, Button } from '@mui/material';
import vk from './../../assets/images/SignIn/vk.png';
import yandex from './../../assets/images/SignIn/yandex.png';
import facebook from './../../assets/images/SignIn/facebook.png';
import google from './../../assets/images/SignIn/google.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../../store/initialSlice';
import './Login.scoped.scss';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

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

  const onSubmit = (data) => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
   //   localStorage.setItem(JSON.stringify(data.user))
   //   setUser(data.user)
      dispatch(getUserData(data))
      if (data.user === undefined) {
        return alert("Введены неверные данные") 
      }
      return navigate('/profile')
    })
  };

  return (
    <div className='container'>
      <div className='title'>Войти</div>
      <div className='body_container'>
        <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <TextField
              {...register('email')}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id='email'
              label='Электронная почта'
              type='search'
              size='normal'
              margin='normal'
              fullWidth
            />
              <div className='invalid-feedback'>{errors.email?.message}</div>
          </div>
          <div className='form-group'>
            <TextField
              {...register('password')}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id='outlined-password-input'
              label='Пароль'
              type='password'
              autoComplete='current-password'
              size='normal'
              fullWidth
              margin='normal'
            />
              <div className='invalid-feedback'>{errors.password?.message}</div>
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
            <img src={yandex} alt='yandex' onClick={() => console.log(localStorage)} />
            <img src={vk} alt='vk' onClick={() => console.log(user)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
