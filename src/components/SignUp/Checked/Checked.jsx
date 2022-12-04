import React from 'react';
import img from '../../../assets/images/SignIn/emailChecked.png';
import './Checked.scoped.scss';

const Checked = () => (
  <div className="container">
    <img src={img} alt="email confirm" />
    <span className="title">Адрес электронной почты подтвержден</span>
    <button type="submit" className="prime_btn">
      <span className="text">ПРОДОЛЖИТЬ</span>
    </button>
  </div>
);

export default Checked;
