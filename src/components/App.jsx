import React from 'react';
import SignUp from './SignUp/SignUp.jsx';
import Greeting from './Greeting/Greeting.jsx';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile/Profile.jsx';
import Login from './Login/Login.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;
