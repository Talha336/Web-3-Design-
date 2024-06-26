import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Section1btns from './Section1btns'

import Section1card from './Section1card'


const Section1part1 = () => {
  return (
    <div className='section1'>
        <Grid container spacing ={2}>
            <Grid  sx={{mt:"60px",justifyContent:"center",alignItems:"center"}} item xs ={12} md={6}>
            <div>
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
          </div>


          <Typography
     variant="h4"
     sx={{
       fontFamily: "Segoe UI",
       color: "white",
       fontWeight: 900,
       lineHeight: "97.559%",
       ml:"4px",
       mt:"10px",
       fontSize:"50px"
          }}
   
   >
    Web3 Raffle & Games
            <div>in your favor</div>
   </Typography>


   <Typography
            variant="body2"
            sx={{
              fontFamily: "Poppins",
              fontStyle:"normal",
              fontWeight:"400px",
              mt: "4px",
              color:"white",
              fontSize:"20px",
              ml:"4px",
              mt:"20px"
              
            }}
          >
            Highest Odds, Highest number of Winners, Highest Security &
            <div>transparency via blockchain</div>
        </Typography>

       <Section1btns/>


            </Grid>

         
          <Grid item xs={12} md={5} sx={{mt:"60px",justifyContent:"center",alignItems:"center",  mb:"50px"}}>
         <Section1card/>

          </Grid>

          
      
         

        
          

       

          
        </Grid>





      
       

  





    

    </div>
  )
}

export default Section1part1
