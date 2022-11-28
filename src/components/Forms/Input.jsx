import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

const Input = () => {
  return <TextField 
  sx={{ fullWidth: true }}
  id='outlined-basic' 
  label='Email' 
  variant='outlined'
  error
  helperText='Error' />;
};

export default Input;
