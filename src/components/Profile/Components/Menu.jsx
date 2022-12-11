import React from 'react';
import MenuList from '@mui/material/MenuList';
import { Grid, useMediaQuery } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../../../assets/images/profile/profileLogo.png';
import '../Profile.scoped.scss';

const ResponsiveMenu = () => {
  const matches = useMediaQuery('(min-width:950px)');

  const height = matches ? '100vh' : '';
  const flexDirection = matches ? 'column' : 'row';

  if (!matches) {
    return (
      <Grid container sx={{ width: '100vw', justifyContent: 'space-around' }}>
        {matches ? <img src={logo} alt="atha yoga logo" className="logo_img" /> : ''}
        <Grid item>
          <ListItemIcon>
            <SearchIcon fontSize="large" className="menu_img" />
          </ListItemIcon>
          {matches ? <ListItemText>Мои занятия</ListItemText> : ''}
        </Grid>
        <Grid item>
          <ListItemIcon>
            <FavoriteBorderIcon fontSize="large" className="menu_img" />
          </ListItemIcon>
          {matches ? <ListItemText>Избранное</ListItemText> : ''}
        </Grid>
        <Grid item>
          <ListItemIcon>
            <SchoolIcon fontSize="large" className="menu_img" />
          </ListItemIcon>
          {matches ? <ListItemText>Мой прогресс</ListItemText> : ''}
        </Grid>
        <Grid item>
          <ListItemIcon>
            <CalendarMonthOutlinedIcon fontSize="large" className="menu_img" />
          </ListItemIcon>
          {matches ? <ListItemText>Моё расписание</ListItemText> : ''}
        </Grid>
        <Grid item>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="large" className="menu_img" />
          </ListItemIcon>
          {matches ? <ListItemText>Профиль</ListItemText> : ''}
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container>
      <MenuList sx={{ height, display: 'flex', flexDirection }}>
        {matches ? <img src={logo} alt="atha yoga logo" className="logo_img" /> : ''}
        <MenuItem>
          <ListItemIcon>
            <SearchIcon fontSize="large" />
          </ListItemIcon>
          {matches ? <ListItemText>Мои занятия</ListItemText> : ''}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FavoriteBorderIcon fontSize="large" />
          </ListItemIcon>
          {matches ? <ListItemText>Избранное</ListItemText> : ''}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SchoolIcon fontSize="large" />
          </ListItemIcon>
          {matches ? <ListItemText>Мой прогресс</ListItemText> : ''}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CalendarMonthOutlinedIcon fontSize="large" />
          </ListItemIcon>
          {matches ? <ListItemText>Моё расписание</ListItemText> : ''}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="large" />
          </ListItemIcon>
          {matches ? <ListItemText>Профиль</ListItemText> : ''}
        </MenuItem>
      </MenuList>
    </Grid>
  );
};

const LargeMenu = () => (
  <ResponsiveMenu />

);

export default LargeMenu;
