import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const Section8 = () => {
  return (
    <div className='sec8'>
      <Grid container spacing ={2}>
        <Grid item xs ={12}>
        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"80px",
              textAlign:"center",
              fontSize:"50px"

              
            }}
          >
        Tokenomics
          </Typography>

          <Typography
  variant="body2"
   
    sx={{
      fontFamily: "Popins",
      color: "white",
      mt: "4px",
      ml:"4px",
      marginTop:"30px",
      fontSize:"20px"
    
    }}
  >
  <div style={{textAlign:"center"}}>GAMBET is a BEP-20 token deployed on BNB Chain.
 
    <div> The total supply of $GAMBET tokens is 10 billion (10,000,000,000). </div> </div>

 
  



  </Typography>




        </Grid>


        <Grid item xs={12} sm={6} md={12} >

       

        <img className='centered' style={{ display: 'block', margin: '30px auto 0', width: '650px', height: '380px' }} src='/Assets/Group 218 (2).png' alt="Centered Image" />
</Grid>


 <Grid item xs ={12}>
 <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"30px",
              textAlign:"center",
              fontSize:"50px"

              
            }}
          >
        Token Contract
          </Typography>
          
 
          <img
  style={{
    height: 'auto',
    maxWidth: '100%',
    width: '100%',
    maxHeight: '450px',
    maxWidth: '750px',
    display: 'block',             // Make the image a block element
    margin: '0 auto',             // Center horizontally
    marginTop: '30px',           // Center vertically
    marginBottom: 'auto',        // Center vertically
  }}
  src='/Assets/Group 192.png'
  alt='Image'
/>

  

 </Grid>
     

      </Grid>
    </div>
  )
}

export default Section8
