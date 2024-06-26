import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const Section12 = () => {
  return (
    <div className='sec12'> 
     <Grid container spacing ={2}>
        <Grid item xs={12}>
        <Typography
            variant="h6"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
             mt:"50px",
             fontWeight:"bold",
             textAlign:"center",
             fontSize:"15px"
             

              
            }}
          >
        Copyright © 2023 GAMBET | All Rights Reserved

          </Typography>


          <Typography
  variant="body2"
   
    sx={{
      fontFamily: "Popins",
      color: "white",
      mt: "4px",
      ml:"4px",
      marginTop:"40px",
      textAlign:"center",
   
    
    }}
  >
  <div style={{textAlign:"center",fontWeight: "400"}}>Raffles and games on gambet.io are licensed under license number 546/SUV issued by the  Costa Rica Gaming
  <div> Control Board, authorized and regulated by the Government of  Costa Rica.</div>
 
   </div>

 
  



  </Typography>

        </Grid>

        <Grid item xs={6} sx={{display:"flex"}}>
            <img style={{height:"40px",width:"100px",marginTop:"60px"}} src='/Assets/GAMBET.png'/>
            
           



        </Grid>

        <Grid item xs={6} sx={{display:"flex",height:"30px",width:"30px",mt:"60px"}}>
        <Button size="small">
            <img src="/Assets/Group 67.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/Group 66.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/Group 58.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/Group 61.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/Group 65.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/Page-1.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/Vector.png" alt="Image 1" />
          </Button>
          <Button size="small">
            <img src="/Assets/github-142-svgrepo-com 1.png" alt="Image 1" />
          </Button>
          


        </Grid>

        <Grid item xs={12}>

            
          <Typography
  variant="body2"
   
    sx={{
      fontFamily: "Popins",
      color: "#A5A5A8",
      mt: "4px",
      ml:"4px",
      marginTop:"40px",
      textAlign:"center",
      
    
    }}
  >
  <div style={{textAlign:"center",fontWeight: "400"}}>
  Disclaimer: Please ensure you are above 18 years of age and have 
  <div>no restriction in your country to participate in crypto games. </div>

   </div>

 
  



  </Typography>


     


        </Grid>

       

     </Grid>
    </div>
  )
}

export default Section12
