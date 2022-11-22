import React from 'react';
import icon from './../../assets/images/SplashScreens/icon.png';
import firstImg from './../../assets/images/SplashScreens/firstPage.png';
import secondImg from './../../assets/images/SplashScreens/secondPage.png';
import thirdImg from './../../assets/images/SplashScreens/thirdPage.png';
import './SplashScreens.scoped.scss';

const StartPage = () => {
  return (
    <div className='startPage_container'>
      <img className='startPage_logo' src={icon} alt='logo' />
    </div>
  );
};

const FirstScreen = () => {
  return (
    <>
      <div className='title_container'>
        <h1 className='description'>Исследуйте</h1>
        <span>множество занятий и материалов</span>
        <span>по различным темам и направлениям</span>
      </div>
      <div>
        <img src={firstImg} alt='sportsman' />
      </div>
    </>
  );
};

const SecondScreen = () => {
  return (
    <>
      <div className='title_container'>
        <h1 className='description'>Занимайтесь</h1>
        <span>в подходящее время, в удобном месте</span>
        <span>с лучшими преподавателями</span>
      </div>
      <div>
        <img src={secondImg} alt='sportsman' />
      </div>
    </>
  );
};

const ThirdScreen = () => {
  return (
    <>
      <div className='title_container'>
        <h1 className='description'>Создавайте</h1>
        <span>собственные курсы и занятия</span>
        <span> </span>
      </div>
      <div>
        <img src={thirdImg} alt='sportsman' />
      </div>
    </>
  );
};

const SplashScreens = () => {
  return (
    <div className='container'>
      <ThirdScreen />
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

export default SplashScreens;
