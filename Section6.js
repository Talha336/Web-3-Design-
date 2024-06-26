import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const Section6 = () => {
  return (
    <div className='sec6'>
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
         How to be part of the community?
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
          <div style={{marginTop:"30px"}}>Participants can join raffles independently by buying tickets using stablecoins and win prizes. 
          You can also join the community to gain additional benefits like increasing your odds in
             raffles and getting a revenue sharing and voting rights.</div>
           

            <div style={{marginTop:"30px"}}> $GAMBET is the native utility token powering the ecosystem. Buying and holding this 
              token gives you a membership to the community.We offer 5 tiers of community membership 
            which can be obtained by staking the $GAMBET tokens.</div> 

          

           <div style={{marginTop:"30px"}}> Staking GAMBET tokens gets you one of the tier levels and offers rewards back in GAMBET 
           tokens which can be used to pay for portion of the raffle ticket. The more tokens you stake, 
            the higher tier you receive which gets you higher odds in raffles </div>
          
        


         
          </Typography>

        
        </Grid>
        
      

        <Grid   item xs={12} md={5}>
       <img style={{marginTop:"120px",height:"400px",width:"500px",marginRight:"20px"}} src='/Assets/90452 [Converted].png'/>
        

        <Button
            style={{
            
              marginTop:"30px",
              marginLeft:"60px",
             
              width:"100px",
             width:"200px",
              borderRadius: "10px",
              backgroundColor: "#2D1F38",
              color: "white",
              boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.60)",
            }}
          >
            Raffle Play
          </Button> 
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
              fontSize:"50px"

              // Added margin-bottom
            }}
          >
         Tiers & Benefits
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"6px",
              marginTop:"20px",
              fontSize:"30px"

              // Added margin-bottom
            }}
          >
         Tiers
          </Typography>

        </Grid>

        <Grid container justifyContent="center" alignItems="center">
  <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img
      style={{
        height: 'auto',
        maxWidth: '100%',
        width: '100%',
        maxHeight: '450px', // Increase the maximum height
        maxWidth: '750px',  // Increase the maximum width
      }}
      src='/Assets/Group 190.png'
      alt='Image'
    />
  </Grid>

  
</Grid>

<Grid item xs ={12}>



  <Typography
    variant="h"
    sx={{
      fontFamily: "Segoe UI",
      color: "white",
      fontWeight: 900,
      ml:"6px",
      marginTop:"20px",
      fontSize:"30px"

      // Added margin-bottom
    }}
  >
 Benefits
  </Typography>

</Grid>


<Grid container justifyContent="center" alignItems="center">
  <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img
      style={{
        height: 'auto',
        maxWidth: '100%',
        width: '100%',
        maxHeight: '450px', // Increase the maximum height
        maxWidth: '750px',  // Increase the maximum width
      }}
      src='/Assets/Group 191.png'
      alt='Image'
    />
  </Grid>

  
</Grid>



      </Grid>
    </div>
  )
}

export default Section6
