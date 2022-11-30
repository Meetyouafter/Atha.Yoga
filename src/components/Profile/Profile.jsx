import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './Profile.scoped.scss';

const Profile = () => {
  const userData = useSelector(state => state.initial.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      return navigate('/login')
    }
  })


  return (
    <div className='container'>
    <div>Hello, {userData.name}</div>
    <div>Your email is {userData.email}</div>
    </div>
  )
};

export default Profile;
