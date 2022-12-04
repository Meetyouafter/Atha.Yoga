import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import img from '../../../assets/images/SignIn/letter.png';
import './MailSend.scoped.scss';

const MailSend = () => (
  <div className="container">
    <img src={img} alt="email checked" className="email_img" />
    <span className="title">Письмо с подтверждением отправлено на почту</span>
    <span className="notification">
      Если Вы не получили письмо или ссылка не работает,
    </span>
    <a href="/" className="link">
      отправьте письмо еще раз
    </a>
    <Button
      component={Link}
      to="/login"
      variant="contained"
      type="submit"
      className="prime_btn"
      sx={{ marginTop: '50px', padding: '10px' }}
    >
      Продолжить
    </Button>
  </div>
);

export default MailSend;
