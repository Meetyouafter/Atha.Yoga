import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Grid,
} from '@mui/material';

const Profile = () => {
  const userData = useSelector(state => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(userData).length) {
      navigate('/login');
    }
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item><Typography variant="h2" sx={{ textAlign: 'center' }}>{`Hello, ${userData.name}`}</Typography></Grid>
      <Grid item><Typography variant="h2" sx={{ textAlign: 'center' }}>{`Your email is ${userData.email}`}</Typography></Grid>
    </Grid>
  );
};

export default Profile;
