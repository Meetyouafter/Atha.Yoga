import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  Grid,
  Box,
} from '@mui/material';
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

import './Profile.scoped.scss';

const Profile = () => {
  const userData = useSelector(state => state.user.user);
  const navigate = useNavigate();
  /*
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
      spasing={3}
      sx={{ minHeight: '100vh' }}
    >
      <Grid
        item
        xs={2}
        sx={{
          minHeight: '100%', justifyContent: 'center', display: 'flex', borderRight: '1px solid #DCDCDC',
        }}
      >
        <MenuList sx={{ height: '100%' }}>
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
        <Typography variant="h2" sx={{ textAlign: 'center' }}>Профиль</Typography>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>{`Hello, ${userData.name}`}</Typography>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>{`Your email is ${userData.email}`}</Typography>
        <img src={background} alt="user's background" />
        <img src={avatar} alt="user's avatar" className="avatar_img" />
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto corporis id quidem sed illum dolores, 
          quasi dicta debitis, autem 
          aliquam minus nulla hic, ipsum fugit vitae nesciunt culpa libero est?Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Nemo 
          officia facere ullam maiores a quidem, perferendis culpa rerum distinctio suscipit quas consequuntur eligendi eaque sit recusandae 
          excepturi provident doloribus quasi.lorem
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam maxime ab fuga maiores laborum id quisquam eum tempore delectus at 
          itaque, aperiam deserunt consequatur? Ad perspiciatis aspernatur magni dicta tenetur.lorem
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <NotificationsNoneIcon fontSize="large" />
        <SettingsIcon fontSize="large" />
      </Grid>


    </Grid>
  );
};

export default Profile;
