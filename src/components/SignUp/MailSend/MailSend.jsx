import React from 'react';
import img from '../../../assets/images/SignIn/letter.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './MailSend.scoped.scss';

const MailSend = () => {
  return (
    <div className='container'>
      <img src={img} alt='email checked' className='email_img' />
      <span className='title'>Письмо с подтверждением отправлено на почту</span>
      <span className='notification'>
        Если Вы не получили письмо или ссылка не работает,
      </span>
      <a href='#' className='link'>
        отправьте письмо еще раз
      </a>
      <Link to='/login' style={{ textDecoration: 'none' }}>
        <Button
          variant='contained'
          type='submit'
          className='prime_btn'
          sx={{ marginTop: '50px', padding: '10px' }}
        >
          Продолжить
        </Button>
      </Link>
    </div>
  );
};

export default MailSend;
