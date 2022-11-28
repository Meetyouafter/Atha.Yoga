import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firstImg from './../../assets/images/SplashScreens/firstPage.png';
import secondImg from './../../assets/images/SplashScreens/secondPage.png';
import thirdImg from './../../assets/images/SplashScreens/thirdPage.png';
import Logo from './Logo/Logo.jsx';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views-react-18-fix/lib/SwipeableViews';
import { autoPlay } from 'react-swipeable-views-utils';
import { Paper, Button } from '@mui/material';

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
  const [onStartPage, setOnStartPage] = useState('on');
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const onHideLogo = () => setOnStartPage('hidden');

  useEffect(() => {
    setTimeout(() => {
      setOnStartPage('hidden');
    }, 5000),
      [];
  });

  const onRegister = () => {
    window.location.assign('http://localhost:3000/second/');
  };

  function Item(props) {
    return (
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className='CheckButton'>Check it out!</Button>
      </Paper>
    );
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const splashScreensChoise = () => {
    if (onStartPage === 'on') {
      return <Logo onClick={onHideLogo} />;
    }
    return (
      <div className='container'>
        <Box sx={{ maxWidth: 375, flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {items.map((step, index) => (
              <>
                <p className='title'>{step.title}</p>
                <p className='description'>{step.description}</p>
                <div key={step.label} className='container2'>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img src={step.img} alt={step.description} />
                  ) : null}
                </div>
              </>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            className='dotted'
          />
          <Link to='/register'>
            <Button variant='contained'>Присоединиться</Button>
          </Link>
          <div className='footer_container'>
            <div className='footer'>Уже есть аккаунт?</div>
            <Link to='/login'>Войти</Link>
          </div>
        </Box>
      </div>
    );
  };

  return splashScreensChoise();
};

export default Greeting;
