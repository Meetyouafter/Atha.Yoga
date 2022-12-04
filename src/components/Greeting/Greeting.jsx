import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import { MobileStepper, Button } from '@mui/material';
import firstImg from '../../assets/images/SplashScreens/firstPage.png';
import secondImg from '../../assets/images/SplashScreens/secondPage.png';
import thirdImg from '../../assets/images/SplashScreens/thirdPage.png';
import Logo from './Logo/Logo';
import './Greeting.scoped.scss';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const items = [
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

const Greeting = () => {
  const [isLogo, setIsLogo] = useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleStepChange = step => {
    setActiveStep(step);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLogo(false);
    }, 5000);
  }, []);

  const splashScreensChoice = () => {
    if (isLogo) {
      return <Logo onClick={() => setIsLogo(false)} />;
    }
    return (
      <div className="container">
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          style={{ width: '100%', maxWidth: '380px' }}
        >
          {items.map(item => (
            <div key={item.description} className="body_container">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
              <img src={item.img} alt="sportsman" />
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
        <Link
          to="/register"
          style={{ textDecoration: 'none', width: '100%', maxWidth: '300px' }}
        >
          <Button
            variant="contained"
            sx={{ marginTop: '50px', padding: '10px' }}
          >
            Присоединиться
          </Button>
        </Link>
        <div className="account_container">
          <span>Уже есть аккаунт?</span>
          <Link to="/login">Войти</Link>
        </div>
      </div>
    );
  };

  return splashScreensChoice();
};

export default Greeting;
