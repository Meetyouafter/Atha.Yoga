import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Container, Typography } from '@mui/material';
import firstImg from './../../assets/images/SplashScreens/firstPage.png';
import secondImg from './../../assets/images/SplashScreens/secondPage.png';
import thirdImg from './../../assets/images/SplashScreens/thirdPage.png';
import './SplashScreens.scoped.scss';

const Screen = (props) => {
  return (
    <>
      <div>
        <h1>{props.item.title}</h1>
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
  var items = [
    {
      title: 'Исследуйте',
      description:
        'множество занятий и материалов по различным темам и направлениям',
      img: firstImg,
    },
    {
      title: 'Занимайтесь',
      description:
        'в подходящее время, в удобном месте с лучшими преподавателями',
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
      <Carousel >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Button className='CheckButton'>
        <Button variant='contained'>ПРИСОЕДИНИТЬСЯ</Button>
      </Button>
      <Typography variant='h1' component='h2'>
        Уже есть аккаунт?
      </Typography>
      <a href='#'>Войти</a>
    </Container>
  );
}

function Item(props) {
  return (
    <Container>
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.img} alt='sportsman' />
    </Container>
  );
}

export default SplashScreens;
