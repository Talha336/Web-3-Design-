import { Grid } from '@mui/material';
import React from 'react';

const Section3pt1 = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={8}  sx={{  ml:"30px",justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ height: "450px", width: "450px",marginTop:"60px" }} src='/Assets/Group 193.png' alt="Centered Image" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Section3pt1;
