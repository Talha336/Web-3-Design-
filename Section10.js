import { Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'

const Section10 = () => {
  return (
    <div className='sec10'>
     <Grid container spacing ={2}>
        <Grid item xs={12}>
        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"60px",
              fontSize:"50px"
             

              
            }}
          >
        Roadmap
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
  <div >We have already completed the initial version of the product as of Q3 2023, where we support stablecoin raffles.
    
     <div> This is currently in testnet. Our roadmap defines the timeline for the future product release and our go to market strategy</div>
 
     </div>

 
  



  </Typography>


        </Grid>

    
        <Grid item xs={12} md={10} sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"20px",ml:"30px"}}>
            <img style={{height:"350px",width:"650px"}} src='/Assets/Group 102.png'/>
            <img style={{height:"350px",width:"650px"}}src='/Assets/Group 103.png'/>  
            <img style={{height:"350px",width:"650px"}} src='/Assets/Group 112.png'/>  
            <img style={{height:"350px",width:"650px"}} src='/Assets/Group 105.png'/>
            <img style={{height:"350px",width:"650px"}} src='/Assets/Group 113.png'/>

        </Grid>

        <Grid item xs ={12}>
        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"60px",
              marginSize:"50px"
             

              
            }}
          >
         In the News
          </Typography>


        </Grid>

        <Grid className='cardss' item xs={12}  sx={{display:"flex",alignItems:"center",justifyContent:"center",mt:"50px",ml:"4px"}}>
            <img style={{height:"550px",width:"400px"}} src='/Assets/Group 118.png'/>
            <img style={{height:"550px",width:"400px"}}src='/Assets/Group 119.png'/>  
            <img style={{height:"550px",width:"400px"}} src='/Assets/Group 120.png'/>  
         

        </Grid>
       

     </Grid>
    </div>
  )
}

export default Section10
