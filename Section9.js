import { Grid, Typography } from '@mui/material'
import React from 'react'

const Section9 = () => {
  return (
    <div className='sec9'>
      <Grid container spacing ={2}>
        <Grid item xs ={12}>
        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"150px",
              fontSize:"50px"

              // Added margin-bottom
            }}
          >
         Team & Advisors
          </Typography>


        </Grid>

        <Grid item xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"30px",mb:"100px"}}>
            <img style={{height:"400px",width:"350px"}} src='/Assets/Group 149.png'/>
            <img style={{height:"400px",width:"350px"}}src='/Assets/Group 152.png'/>  
            <img style={{height:"400px",width:"350px"}} src='/Assets/Group 153.png'/>  
            <img style={{height:"400px",width:"350px"}} src='/Assets/Group 154 (1).png'/>

        </Grid>

        <Grid item xs={12}>
        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"30px",
              marginBottom:"70px",
              fontSize:"50px"

              // Added margin-bottom
            }}
          >
         Our Backers and Partners
          </Typography>

        </Grid>
      
      </Grid>
    </div>
  )
}

export default Section9
