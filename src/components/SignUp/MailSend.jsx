import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  Grid,
  Container,
  Typography,
} from '@mui/material';
import img from '../../assets/images/signUp/letter.png';

const MailSend = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    direction="column"
    sx={{ minHeight: '100vh' }}
  >
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid item><img src={img} alt="email checked" /></Grid>
        <Grid item><Typography variant="h2" sx={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '100px' }}>Письмо с подтверждением отправлено на почту</Typography></Grid>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          sx={{
            marginTop: '50px',
            marginBottom: '30px',
            padding: '10px',
            width: '60%',
          }}
        >
          Продолжить
        </Button>
        <Grid item><Typography varinat="subtitle1">Если Вы не получили письмо или ссылка не работает</Typography></Grid>
        <Grid item><Typography varinat="subtitle2" component={Link} to="/login">отправьте письмо еще раз</Typography></Grid>

      </Box>
    </Container>
  </Grid>
);

export default MailSend;
