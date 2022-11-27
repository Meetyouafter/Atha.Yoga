import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firstImg from './../../assets/images/SplashScreens/firstPage.png';
import secondImg from './../../assets/images/SplashScreens/secondPage.png';
import thirdImg from './../../assets/images/SplashScreens/thirdPage.png';
import Carousel from 'react-bootstrap/Carousel';
import Logo from './Logo/Logo.jsx';
import './Greeting.scoped.scss';

const FirstScreen = () => {
  return (
    <>
      <div className='title_container'>
        <h1 className='description'>Исследуйте</h1>
        <span>множество занятий и материалов</span>
        <span>по различным темам и направлениям</span>
      </div>
      <div>
        <img src={firstImg} alt='sportsman' />
      </div>
    </>
  );
};

const SecondScreen = () => {
  return (
    <>
      <div className='title_container'>
        <h1 className='description'>Занимайтесь</h1>
        <span>в подходящее время, в удобном месте</span>
        <span>с лучшими преподавателями</span>
      </div>
      <div>
        <img src={secondImg} alt='sportsman' />
      </div>
    </>
  );
};

const ThirdScreen = () => {
  return (
    <>
      <div className='title_container'>
        <h1 className='description'>Создавайте</h1>
        <span>собственные курсы и занятия</span>
        <span className='crutch'>_</span>
      </div>
      <div>
        <img src={thirdImg} alt='sportsman' />
      </div>
    </>
  );
};

const Greeting = () => {
  const [onStartPage, setOnStartPage] = useState('on');

  const onHideLogo = () => setOnStartPage('hidden');

  useEffect(() => {
    setTimeout(() => {
      setOnStartPage('hidden');
    }, 5000),
      [];
  });

  const onRegister = () => {
    window.location.assign('http://localhost:3000/second/');
  }

  const splashScreensChoise = () => {
    if (onStartPage === 'on') {
      return <Logo onClick={onHideLogo} />;
    }
    return (
      <div className='container'>
        <Carousel>
          <Carousel.Item>
            <FirstScreen />
          </Carousel.Item>
          <Carousel.Item>
            <SecondScreen />
          </Carousel.Item>
          <Carousel.Item>
            <ThirdScreen />
          </Carousel.Item>
        </Carousel>
        <div className='slider_container'>
          <div className='slider'></div>
          <div className='slider'></div>
          <div className='slider'></div>
        </div>
        <div>
            <Link to='/register'>
            <button className='prime_btn'>
            <span className='btn_text'>ПРИСОЕДИНИТЬСЯ</span>
          </button>
            </Link>

        </div>
        <div className='footer_container'>
          <div className='footer'>Уже есть аккаунт?</div>
          <Link to={'/login'}>Войти</Link>
        </div>
      </div>
    );
  };

  return splashScreensChoise();
};

export default Greeting;
