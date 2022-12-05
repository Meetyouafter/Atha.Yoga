import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
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
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" sx={{ textAlign: 'center' }}>{`Hello, ${userData.name}`}</Typography>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>{`Your email is ${userData.email}`}</Typography>
      </Box>
    </Container>
  );
};

export default Profile;
