/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import icon from '../../../assets/images/SplashScreens/icon.png';
import './Logo.scoped.scss';

const Logo = ({ onClick }) => (
  <div className="container" onClick={onClick} onKeyDown={onClick}>
    <img src={icon} alt="logo" />
  </div>
);

Logo.propTypes = {
  onClick: PropTypes.func,
};

export default Logo;
