import React from 'react'
import img from '../../assets/images/SignIn/emailChecked.png'
import './SignInScreens.scoped.scss';

const CheckedScreen = () => {
  return (
    <div className='signIn_container'>
      <img src={img} alt="email confirm" className='checked_img'/>
      <span className='checked_title'>Адрес электронной почты подтвержден</span>
        <button type='submit' className='checked_prime_btn'>
              <span className='btn_text'>ПРОДОЛЖИТЬ</span>
            </button>
    </div>
    
  );
};

export default CheckedScreen;
