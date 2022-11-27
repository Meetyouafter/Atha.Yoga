import React from 'react'
import img from '../../../assets/images/SignIn/letter.png'
import './MailSend.scoped.scss';

const MailSend = () => {
  return (
    <div className='signIn_container'>
      <img src={img} alt="email checked" className='email_img'/>
      <span className='email_title'>Письмо с подтверждением отправлено на почту</span>
      <span className='email_notification'>Если Вы не получили письмо или ссылка не работает,</span>
        <a href='#' className='email_link'>отправьте письмо еще раз</a>
        <button type='submit' className='email_prime_btn'>
              <span className='btn_text'>ПРОДОЛЖИТЬ</span>
            </button>
    </div>
    
  );
};

export default MailSend;
