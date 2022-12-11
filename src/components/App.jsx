import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Greeting from './Greeting/Greeting';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import MailSend from './SignUp/MailSend';
import Test from './Profile/Trash/Test';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<SignUp />} />
    <Route path="profile" element={<Profile />} />
    <Route path="mail_send" element={<MailSend />} />
    <Route path="test" element={<Test />} />
    <Route path="*" element={<Greeting />} />
  </Routes>
);

export default App;
