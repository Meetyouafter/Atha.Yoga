import React from 'react';
import { Grid } from '@mui/material';
import '../Profile.scoped.scss';

const Test = () => (
  <Grid container spaces={5}>
    <Grid item xs={2} sm={1} md={1} lg={3} xl={1} style={{ background: 'red' }}>1</Grid>
    <Grid item xs={2} sm={2} md={1} lg={2} xl={1} style={{ background: 'blue' }}>2</Grid>
    <Grid item xs={2} sm={3} md={1} lg={1} xl={4} style={{ background: 'green' }}>3</Grid>
    <Grid item xs={2} sm={3} md={1} lg={1} xl={1} style={{ background: 'gray' }}>4</Grid>
    <Grid item xs={2} sm={2} md={1} lg={2} xl={4} style={{ background: 'orange' }}>5</Grid>
    <Grid item xs={2} sm={1} md={1} lg={3} xl={1} style={{ background: 'yellow' }}>6</Grid>
  </Grid>
);

export default Test;
