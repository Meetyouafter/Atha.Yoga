import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import icon from './../../assets/images/SplashScreens/icon.png';
import firstImg from './../../assets/images/SplashScreens/firstPage.png';
import secondImg from './../../assets/images/SplashScreens/secondPage.png';
import thirdImg from './../../assets/images/SplashScreens/thirdPage.png';
import './SplashScreens.scoped.scss';

const StartPage = ({ onClick }) => {
  return (
    <div className='startPage_container' onClick={onClick}>
      <img className='startPage_logo' src={icon} alt='logo' />
    </div>
  );
};

const Screen = (props) => {
  return (
    <>
    <div>
        <h1 className='description'>{props.item.title}</h1>
        </div>
        <div>
        <span>{props.item.description}</span>
        </div>
        <div>
        <img src={props.item.img} alt='sportsman' />
    </div>
    </>
  );
};

function SplashScreens(props) {
  const screens = [
    {
      title: 'Исследуйте',
      description: 'множество занятий и материалов по различным темам и направлениям',
      img: firstImg,
    },
    {
      title: 'Занимайтесь',
      description: 'в подходящее время, в удобном месте с лучшими преподавателями',
      img: secondImg,
    },
    {
      title: 'Создавайте',
      description: 'собственные курсы и занятия',
      img: thirdImg,
    },
  ];

  return (
    <Container>
      <Carousel>
        {screens.map((item, i) => (
          <Screen key={i} item={item} />
        ))}
      </Carousel>
      <div className='slider_container'>
        <div className='slider'></div>
        <div className='slider'></div>
        <div className='slider'></div>
      </div>
      <div>
        <button className='prime_btn'>
          <span className='btn_text'>ПРИСОЕДИНИТЬСЯ</span>
        </button>
      </div>
      <div className='footer_container'>
        <div className='footer'>
          Уже есть аккаунт?</div>
        <a href='#'>Войти</a>
      </div>
      </Container>
  );
}

export default SplashScreens;
