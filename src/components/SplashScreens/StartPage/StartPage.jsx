import React from 'react';
import icon from './../../../assets/images/SplashScreens/icon.png';
import './StartPage.scss';

const StartPage = () => {
  return (
    <div className='container'>
      <img className='logo' src={icon} alt='logo' />
    </div>
  );
};

export default StartPage;
