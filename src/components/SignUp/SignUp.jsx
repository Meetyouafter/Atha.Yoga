import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import vk from './../../assets/images/SignIn/vk.png';
import yandex from './../../assets/images/SignIn/yandex.png';
import facebook from './../../assets/images/SignIn/facebook.png';
import google from './../../assets/images/SignIn/google.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addNewUser } from '../store/autorizationSlice.js';
import MailSend from './MailSend/MailSend.jsx';
import { Link } from 'react-router-dom';
import './SignUp.scoped.scss';
import Input from '../Forms/Input.jsx';
import { values } from 'json-server-auth';

const SignUp = () => {
  const users = useSelector((state) => state.autorization.users);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });

  const validate = () => {
    let temp = {};
    temp.fullname = values.fullname ? '' : 'This field is required';
    temp.email = (/$|.+@.+..+/).test(values.email) ? '' : 'Email is incorrect';
    temp.password = values.password.length > 4 && values.password.length < 21 ? '' : 'Password must be from 5 to 20 symbols.';
    temp.checked = values.checked === true ? '' : 'Submit terms.';
  }

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
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  return (
    <div className='container'>
      <h1 className='title'>Создать аккаунт</h1>
      <div className='body_container'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='register_form'
        >
          <div className='form-group'>


            <Input />

            <TextField 
    hintText="Phone"
    error ={this.state.errorText.length === 0 ? false : true }
    floatingLabelText="Phone"
    name="phone"
    helperText={this.state.errorText}
    onChange={this.onChange.bind(this)}/>


            <TextField
              sx={{ m: 2, width: '37ch', height: '5ch' }}
              {...register('email')}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id='email'
              label='E-mail'
              type='search'
            />
            <TextField
              error
              id='outlined-error-helper-text'
              label='Error'
              defaultValue='Hello World'
              helperText='Incorrect entry.'
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
            <span className='apply_term'>Я принимаю условия </span>
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
          <Link to='/login'>Войти</Link>
        </div>
        Или войти с помощью
        <div>
          <img src={facebook} alt='facebook' />
          <img src={google} alt='google' />
          <img src={yandex} alt='yandex' />
          <img src={vk} alt='vk' />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
