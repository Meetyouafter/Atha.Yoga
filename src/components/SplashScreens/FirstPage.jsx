import React from 'react';
import icon from './../../assets/images/SplashScreens/firstPage.png';
import './SplashScreens.scss';

const FirstPage = () => {
  return (
    <div className='firstPage_container'>
      <div className='firstPage_title'>
        <h1 className='firstPage_h1'>Исследуйте</h1>
        <span>множество занятий и материалов</span>
        <span>по различным темам и направлениям</span>
      </div>
      <div>
        <img className='firstPage_img' src={icon} alt='sportsman' />
      </div>
      <div className='firstPage_slider_container'>
        <div className='firstPage_slider'></div>
        <div className='firstPage_slider'></div>
        <div className='firstPage_slider'></div>
      </div>
      <div>
        <button className='firstPage_btn'>
          <span className='firstPage_btn_text'>ПРИСОЕДИНИТЬСЯ</span>
        </button>
      </div>
      <div className='firstPage_footer_container'>
        <div className='firstPage_footer'>Уже есть аккаунт?</div>
        <a href='#'>Войти</a>
      </div>
    </div>
  );
};

export default FirstPage;
