import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Section4 = () => {
  return (
    <div className="sec4">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:"30px"}}>
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
         How are we different?
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
           Traditional raffles lack transparency, favoring just a few winners 
                    from millions of tickets sold. 
                We offer clear odds, ensuring more participants win.

          <div style={{marginTop:"30px"}}>  Participants can boost their chances and earn from the platform by owning 
           $GAMBET tokens 
           
         and engaging with the community.
           </div>

           <div style={{marginTop:"30px"}}> We avoid using $GAMBET exclusively for ticket prices and prize distribution to shield participants 
        from token price volatility. Prizes will be in stablecoins, 
            
            Bitcoin, and Ethereum.
          
          </div>


         
          </Typography>

          <Button
            style={{
            
              marginTop:"30px",
              marginLeft:"20px",
             
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
        
      

        <Grid   item xs={12} md={6}>
     

        <img style={{ 
           
           
           marginTop:"100px",
     
            marginLeft:"10px",
            height:"380px",
            width:"450px",           
            display: "flex",
            alignItems: "center",
            justifyContent: "center"}} src="/Assets/190 [Converted].png"/>

        
        </Grid>
      </Grid>
    </div>
  );
};

export default Section4;
