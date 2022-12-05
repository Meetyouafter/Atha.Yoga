/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/images/greeting/logo.png';
import './Logo.scoped.scss';

const Logo = ({ onClick }) => (
  <div className="container" onClick={onClick} onKeyDown={onClick}>
    <img src={logo} alt="logo" />
  </div>
);

Logo.propTypes = {
  onClick: PropTypes.func,
};

export default Logo;
