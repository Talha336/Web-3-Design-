import { Grid } from '@mui/material';
import React from 'react';

const Section2 = () => {
  return (
    <div className='sec2'>
     
       <Grid item xs={12} >
           
            <Grid container spacing={2}  sx={{justifyContent:"center",alignItems:"center"}}   >
              <Grid item xs={2} >
                <img  style={{marginTop:"50px"}} src='/Assets/Group 16.png' alt='Logo 1' />
              </Grid>
              <Grid item xs={2}>
                <img   style={{marginTop:"50px"}} src='/Assets/logo-ladspa-svgrepo-com 1.png' alt='Logo 2' />
              </Grid>
              <Grid item xs={2}>
                <img  style={{marginTop:"50px"}}  src='/Assets/logo-protools-svgrepo-com 1.png' alt='Logo 3' />
              </Grid>
              <Grid item xs={2}>
                <img  style={{marginTop:"50px"}} src='/Assets/logo-reaper-svgrepo-com 1 (1).png' alt='Logo 4' />
              </Grid>
              <Grid item xs={2}>
                <img  style={{marginTop:"50px"}} src='/Assets/Group 188.png' alt='Logo 5' />
              </Grid>
              <Grid  item xs={2}>
                <img  style={{marginTop:"50px"}} src='/Assets/brand-soundcloud-sq-svgrepo-com 1.png' alt='Logo 6' />
              </Grid>
            </Grid>
          
        </Grid>
     
    </div>
  );
}

export default Section2;
