import React from 'react';
import icon from './../../assets/images/SplashScreens/icon.png';
import './SplashScreens.scss';

const StartPage = () => {
  return (
    <div className='startPage_container'>
      <img className='startPage_logo' src={icon} alt='logo' />
    </div>
  );
};

export default StartPage;
