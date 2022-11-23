import React, { useState } from 'react';
import SignInScreens from './SignInScreens/SignInScreens.jsx';
import SplashScreens from './SplashScreens/SplashScreens.jsx';

const App = () => {
  const [active, setActive] = useState('first')
  return (
    <>
      <SignInScreens />
    </>
  );
};

export default App;
