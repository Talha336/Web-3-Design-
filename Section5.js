import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Section5 = () => {
  return (
    <div className="sec5">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
       <img style={{height:"350px",width:"350px",marginTop:"120px",marginLeft:"20px"}} src="/Assets/Group 197.png"/>
        </Grid>

        <Grid item xs={12} md={6}>

        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"100px",
              fontSize:"50px",


              // Added margin-bottom
            }}
          >
        Win Privileged Prizes
          </Typography>
          <Typography
          variant="body2"
           
            sx={{
              fontFamily: "Popins",
              color: "white",
              mt: "4px",
             
              marginTop:"30px",
              fontSize:"20px"
            
            }}
          >
          GAMBET offers different kinds of prizes ranging from 
          <div>Stablecoins, Bitcoin, Ethereum, Altcoins, 
          various types of
          <div> NFTs like precious arts, gaming assets, metaverse properties.</div>
           We will also reward the community with privileged prizes</div> 
           <div> like  allocation to new revolutionary projects.</div>

          <div style={{marginTop:"30px"}}> Prizes can be claimed immediately after the draw is completed 
          <div>and all transactions are visible to all.</div> 
          
           
         
          
          </div>


         
          </Typography>

     <Button      style={{
            
            marginTop:"30px",
            marginLeft:"20px",
           
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
  );
};

export default Section5;
