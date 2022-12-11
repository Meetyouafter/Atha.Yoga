import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//  import { useNavigate, Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Avatar,
  Badge,
  Button,
  useMediaQuery,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import background from '../../assets/images/profile/background.jpg';
import avatar from '../../assets/images/profile/avatar.jpg';

import './Profile.scoped.scss';
import Menu from './Components/Menu';

const Profile = () => {
  const [openText, setOpenText] = useState(true);
  const userData = useSelector(state => state.user.user);

  const matches = useMediaQuery('(min-width:950px)');

  /*
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.keys(userData).length) {
      navigate('/login');
    }
  });
*/

  return (
    <Grid
      container
      direction={matches === true ? 'row' : 'column'}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{ paddingTop: '20px' }}
    >
      <Grid
        item
        md={2.5}
        sm={1}
        sx={{
          justifyContent: 'center', display: 'flex', borderRight: '1px solid #DCDCDC',
        }}
      >
        {matches ? <Menu /> : ''}
      </Grid>

      <Grid item md={6} sm={1} container>
        <Grid
          item
          sx={{
            marginLeft: '5%', width: '90%', display: 'flex', justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" sx={{ paddingBottom: '30px' }}>Профиль</Typography>
          {matches === false
            ? (
              <Box sx={{ width: '80px', display: 'flex', justifyContent: 'space-between' }}>
                <Badge badgeContent={4} color="secondary" sx={{ cursor: 'pointer' }}>
                  <NotificationsNoneIcon color="action" fontSize="large" />
                </Badge>
                <Badge badgeContent={4} color="secondary" sx={{ cursor: 'pointer' }}>
                  <SettingsIcon color="action" fontSize="large" />
                </Badge>
              </Box>
            )
            : ''}
        </Grid>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            component="img"
            height="168"
            image={background}
            alt="user's background"
          />
          <CardContent>
            <Avatar
              alt={userData.name}
              src={avatar}
              sx={{
                width: 128, height: 128, marginTop: '-80px', marginLeft: '30px', marginBottom: '12px',
              }}
            />
            <Typography variant="h4" sx={{ paddingBottom: '3px' }}>{`${userData.name}`}</Typography>
            <Typography variant="h5" sx={{ paddingBottom: '20px' }}>{`@${userData.name}`}</Typography>

            <Typography variant="body2" color="text.secondary" noWrap={openText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id
            </Typography>
            <Button variant="text" size="small" sx={{ textTransform: 'none', left: '90%', position: 'relative' }} onClick={() => setOpenText(!openText)}>
              {openText === true ? 'больше' : 'меньше'}
            </Button>
          </CardContent>
        </Card>
      </Grid>
      {matches === true
        ? (
          <Grid item md={3.5} sm={1} className="notifications_box">
            <Badge badgeContent={4} color="secondary" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon color="action" fontSize="large" />
            </Badge>
            <Badge badgeContent={4} color="secondary" sx={{ cursor: 'pointer' }}>
              <SettingsIcon color="action" fontSize="large" />
            </Badge>
          </Grid>
        )
        : ''}
      {!matches ? <Grid item md={3.5} sm={1}><Menu /></Grid> : ''}
    </Grid>
  );
};

export default Profile;
