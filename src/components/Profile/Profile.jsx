import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Avatar,
  Badge,
  Button, CardActionArea, CardActions, useMediaQuery,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

import logo from '../../assets/images/profile/profileLogo.png';
import avatar from '../../assets/images/profile/avatar.png';
import background from '../../assets/images/profile/background.jpg';
import images from '../../assets/images/profile/img.jpg';
import qqq from '../../assets/images/profile/qqq.jpg';

import './Profile.scoped.scss';

const Profile = () => {
  const [openText, setOpenText] = useState(true);
  const userData = useSelector(state => state.user.user);

  const matches = useMediaQuery('(min-width:600px)');

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
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{ minHeight: '100vh', paddingTop: '20px' }}
    >
      <Grid
        item
        xs={2.5}
        sx={{
          minHeight: '100%', justifyContent: 'center', display: 'flex', borderRight: '1px solid #DCDCDC',
        }}
      >
        <MenuList sx={{ height: '100vh' }}>
          <img src={logo} alt="atha yoga logo" className="logo_img" />
          <MenuItem>
            <ListItemIcon>
              <SearchIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>Мои занятия</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>Избранное</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SchoolIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>Мой прогресс</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <CalendarMonthOutlinedIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>Моё расписание</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText>Профиль</ListItemText>
          </MenuItem>
        </MenuList>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="body2" sx={{ paddingBottom: '30px' }}>Профиль</Typography>
        <Card sx={{ height: '90%' }}>
          <CardMedia
            component="img"
            height="168"
            image={images}
            alt="user's background"
          />
          <CardContent>
            <Avatar
              alt={userData.name}
              src={qqq}
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

      <Grid item xs={3.5} className="notifications_box">
        <Badge badgeContent={4} color="secondary" sx={{ cursor: 'pointer' }}>
          <NotificationsNoneIcon color="action" fontSize="large" />
        </Badge>
        <Badge badgeContent={4} color="secondary" sx={{ cursor: 'pointer' }}>
          <SettingsIcon color="action" fontSize="large" />
        </Badge>
      </Grid>

    </Grid>
  );
};

export default Profile;
