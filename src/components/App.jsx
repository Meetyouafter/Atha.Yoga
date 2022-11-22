import React, { useState } from 'react';
import SplashScreens from './SplashScreens/SplashScreens.jsx';

const App = () => {
  const [active, setActive] = useState('first')
  return (
    <>
      <SplashScreens />
    </>
  );
};

export default App;
