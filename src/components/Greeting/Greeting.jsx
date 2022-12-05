import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  Button,
  Typography,
  Box,
  Stack,
  Container,
} from '@mui/material';
import firstImg from '../../assets/images/greeting/firstPage.png';
import secondImg from '../../assets/images/greeting/secondPage.png';
import thirdImg from '../../assets/images/greeting/thirdPage.png';
import Logo from './Logo/Logo';

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
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = step => {
    setActiveStep(step);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLogo(false);
    }, 3000);
  }, []);

  const splashScreensChoice = () => {
    if (isLogo) {
      return <Logo onClick={() => setIsLogo(false)} />;
    }
    return (
      <Container
        maxWidth="sm"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flexDirection="column"
        >
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            style={{ width: '100%', maxWidth: '380px' }}
          >
            {items.map(item => (
              <React.Fragment key={item.description}>
                <Typography variant="h2" sx={{ textAlign: 'center', paddingBottom: '10px' }}>{item.title}</Typography>
                <Typography variant="h3" sx={{ textAlign: 'center', paddingBottom: '20px' }}>{item.description}</Typography>
                <img src={item.img} alt="sportsman" />
              </React.Fragment>
            ))}
          </AutoPlaySwipeableViews>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            size="large"
            sx={{ marginTop: '80px', marginBottom: '20px', width: '70%' }}
          >
            Присоединиться
          </Button>
          <Stack direction="row" spacing={2}>
            <Typography varinat="subtitle1">Уже есть аккаунт?</Typography>
            <Typography varinat="subtitle2" component={Link} to="/login">Войти</Typography>
          </Stack>
        </Box>
      </Container>
    );
  };

  return splashScreensChoice();
};

export default Greeting;
