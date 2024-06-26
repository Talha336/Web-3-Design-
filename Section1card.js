import { Button, Card, CardContent, Grid } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

const Section1card = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid sx={{justifyContent:"space-between",alignItems:"center"}} item xs ={4} md={6}>

            {/* <Card
          
          sx={{
            mt: "4px",
            ml:"25px",
          
            height:"300px",
            width:"400px",
          
          

          
        
           
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(137deg, rgba(255, 255, 255, 0.15) 3.49%, rgba(255, 255, 255, 0.06) 99.51%)",
            boxShadow:
              "-8px 17px 15px -9px rgba(255, 255, 255, 0.30) inset, 0px 20px 40px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRight:"21px",
          }}
        >
          <CardContent>
            <Button
              sx={{
               
                borderRadius: "50%",
                background: "#A578FE, #D186FE",
              }}
            >
              <YouTubeIcon sx={{ fontSize: "100px", color: "#A578FE, #D186FE" }} />
            </Button>
          </CardContent>
        </Card> */}
    <img style={{height:"320px",width:"550px"}} src='/Assets/2314110.png'/>
            </Grid>


        </Grid>
   

    </div>
  )
}

export default Section1card
