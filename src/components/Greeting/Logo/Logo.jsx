import React from 'react';
import icon from './../../../assets/images/SplashScreens/icon.png';
import './Logo.scoped.scss';

const Logo = ({ onClick }) => {
  return (
    <div className='container' onClick={onClick}>
      <img src={icon} alt='logo' />
    </div>
  );
};

export default Logo;
