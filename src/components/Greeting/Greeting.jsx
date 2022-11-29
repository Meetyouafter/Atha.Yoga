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
import { Paper, Button, Typography } from '@mui/material';
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

  const splashScreensChoise = () => {
    if (onStartPage === 'on') {
      return <Logo onClick={onHideLogo} />;
    }
    return (
      <AutoPlaySwipeableViews>
        {items.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <img src={item.img} />
          </div>
        ))}
    </AutoPlaySwipeableViews>
    /*
      <Box sx={{
        flexGrow: 1, 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100wv',
        height: '100hv',
        position: 'absolute',
        margin: '0 auto',
        left: 0,
        right: 0,
        top: '50%',
        transform: 'translate(0, -50%)',
        }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{items[activeStep].title}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((item, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={item.img}
                alt={item.description}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
    */







      /*
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{items[activeStep].title}</Typography>
        <Typography>{items[activeStep].description}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((item, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={item.img}
                alt={item.description}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
        <Link to='/register'>
            <Button
              variant='contained'
              type='submit'
              fullWidth
              className='prime_btn'
              sx={{ marginTop: '50px', padding: '10px' }}
            >
              Войти
            </Button>
          </Link>
          <div className='footer_container'>
            <div className='footer'>Уже есть аккаунт?</div>
            <Link to='/login'>Войти</Link>
          </div>
        <div className='container'>
          <div className='title'>Войти</div>
          <div className='body_container'></div>
        </div>
        </Box>
*/
    );
  };

  return splashScreensChoise();
};

export default Greeting;
