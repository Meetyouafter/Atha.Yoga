import React, { useState } from 'react';
import { Counter } from './Counter.jsx';
import EmailScreen from './SignInScreens/EmailScreen.jsx';
import CheckedScreen from './SignInScreens/CheckedScreen.jsx';
import SignInScreens from './SignInScreens/SignInScreens.jsx';
import SplashScreens from './SplashScreens/SplashScreens.jsx';
import Todo from './Todo.jsx';

const App = () => {
  const [active, setActive] = useState('first');
  return (
    <>
    <SignInScreens />
    </>
  );
};

export default App;
