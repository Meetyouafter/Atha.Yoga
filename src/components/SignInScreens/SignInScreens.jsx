import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  TextField,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import vk from './../../assets/images/SignIn/vk.png';
import yandex from './../../assets/images/SignIn/yandex.png';
import facebook from './../../assets/images/SignIn/facebook.png';
import google from './../../assets/images/SignIn/google.png';

import './SignInScreens.scoped.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FirstScreen = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container'>
      <div className='title_container'>
        <h1 className='description'>Создать аккаунт</h1>
      </div>



      <TextField id="outlined-search" label="Search field" type="search" />


      <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label='Password'
        />
      </FormControl>


      <Checkbox {...label} defaultChecked />
      <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />Я
      принимаю условия <a>пользовательского соглашения</a>
      <div>
        <button className='prime_btn'>
          <span className='btn_text'>СОЗДАТЬ</span>
        </button>
      </div>
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
  );
};

const SignInScreens = () => {
  return <FirstScreen />;
};

export default SignInScreens;

/*
  const [onStartPage, setOnStartPage] = useState('on')

  const onHideStartPage = () => setOnStartPage('hidden')

  useEffect(() => {
    setTimeout(() => {
    setOnStartPage('hidden')
    }, 5000), []})

  const splashScreensChoise = () => {
    if (onStartPage === 'on') {
      return <StartPage onClick={onHideStartPage}/>
    }
    return (
      <div className='container'>
      <Carousel>
        <Carousel.Item>
          <FirstScreen />
        </Carousel.Item>
        <Carousel.Item>
          <SecondScreen />
        </Carousel.Item>
        <Carousel.Item>
          <ThirdScreen />
        </Carousel.Item>
      </Carousel>
      <div className='slider_container'>
        <div className='slider'></div>
        <div className='slider'></div>
        <div className='slider'></div>
      </div>
      <div>
        <button className='prime_btn'>
          <span className='btn_text'>ПРИСОЕДИНИТЬСЯ</span>
        </button>
      </div>
      <div className='footer_container'>
        <div className='footer'>Уже есть аккаунт?</div>
        <a href='#'>Войти</a>
      </div>
    </div>
    )
  }
*/
