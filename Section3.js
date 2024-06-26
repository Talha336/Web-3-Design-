import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Section3pt1 from './Section3pt1';
import Section3pt2 from './Section3pt2';
const Section3 = () => {
  return (
    <div className='sec3'>
    <Grid  sx={{display:"flex",justifyContent:"center"} } container spacing ={2}>
      <Grid item xs ={12} md={5}>
        <Section3pt1/>

        </Grid> 

        <Grid item xs ={12} md={7} >

          <Section3pt2/>
        
        </Grid>

    </Grid>
    </div>
  );
}

export default Section3;
