import React from 'react';
import icon from './../../../assets/images/SplashScreens/secondPage.png';
import './SecondPage.scoped.scss';

const SecondPage = () => {
  return (
    <div className='container'>
      <div className='title_container'>
        <h1 className='description'>Занимайтесь</h1>
        <span>в подходящее время, в удобном месте</span>
        <span>с лучшими преподавателями</span>
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

export default SecondPage;
