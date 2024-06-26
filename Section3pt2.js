import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Section3pt2 = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{mt:"60px"}}>
        <Grid item xs={12} >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              fontSize:"40px",
              ml:"10px"
           
             

              // Added margin-bottom
            }}
          >
            GAMBET is a Blockchain
           <div>Raffle & Games Platform</div>
            unlike any other
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Typography
          variant="body2"
           
            sx={{
              fontFamily: "Popins",
              color: "white",
              mt: "4px",
              fontSize:"20px",
              ml:"10px"
            
            }}
          >
            GAMBET offers a revolutionary gameplay in raffles
          
              where all raffles have a fixed number of tickets, up to 90%
            
            of ticket proceeds are distributed as prizes to at least
           
              10% of participants, all this giving full transparency via
          
            the blockchain.


            <div style={{marginTop:"20px"}}>
              The prizes can be claimed immediately after the draw
             directly into your wallets
            </div>
          </Typography>
        </Grid>

        <Grid  sx={{alignItems:"center",justifyContent:"center"}} item xs={8}>
          <Button
            style={{
            
              marginTop:"20px",
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
      </Grid>
    </div>
  );
};

export default Section3pt2;
