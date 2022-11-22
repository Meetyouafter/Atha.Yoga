import React from 'react';
import icon from './../../../assets/images/SplashScreens/firstPage.png';
import './FirstPage.scoped.scss';

const FirstPage = () => {
  return (
    <div className='container'>
      <div className='title_container'>
        <h1 className='description'>Исследуйте</h1>
        <span>множество занятий и материалов</span>
        <span>по различным темам и направлениям</span>
      </div>
      <div>
        <img src={icon} alt='sportsman' />
      </div>
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
  );
};

export default FirstPage;
