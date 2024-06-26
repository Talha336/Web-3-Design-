import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Section7 = () => {
  return (
    <div className='sec7'>
      <Grid container spacing={2}>
      <Grid item xs={12} md={7}>

<Typography
    variant="h4"
    sx={{
      fontFamily: "Segoe UI",
      color: "white",
      fontWeight: 900,
      ml:"4px",
      marginTop:"60px",
      fontSize:"50px"

      // Added margin-bottom
    }}
  >
$GAMBET is deflationary
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
  <div>The gameplay is designed to avoid inflation in $GAMBET. Participants purchase 
    $GAMBET and stake to earn tiers to get better odds in raffles and uses the rewards
    <div> from staking to pay for a portion of the ticket purchase. This increases the buy pressure and decreases the sell pressure.</div> </div>

  <div style={{marginTop:"20px"}}>In addition to the above, the gameplay is also designed to buy back $GAMBET and
  burn them to control any sell pressure at any time. This buyback is funded from</div> 
  

  <div style={{marginTop:"20px"}}>• A small portion of every ticket sale and winning prize
 <div> • A small tax on purchase and sale of GAMBET tokens</div>

  </div>
  


 <div style={{marginTop:"20px"}}> This gives more confidence to the community to purchase $GAMBET and stake them for long to get higher tiers and higher rewards which could be used to buy raffles and win prizes with higher odds.</div>
  <div style={{marginTop:"20px"}}>As the game grows, the community also gains through the appreciation of $GAMBET tokens value.</div>
  </Typography>



</Grid> 

<Grid item xs={12} md={5}>


           
              <img style={{    height:"380px",
              width:"450px",marginLeft:"4px",marginTop:"150px"}} src='/Assets/burn.png'/>
          
       
   


<Button      style={{
    
    marginTop:"30px",
    marginLeft:"100px",
   
    width:"100px",
   width:"200px",
    borderRadius: "10px",
    backgroundColor: "#2D1F38",
    color: "white",
    boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.60)",
  }}>
 Raffle Play
</Button>


</Grid>
        
      </Grid>
    </div>
  )
}

export default Section7
