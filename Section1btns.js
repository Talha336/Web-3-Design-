import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Section1btns = () => {

  const buttonStyle = {
    textTransform: 'none', // Disable the default text transformation
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid sx={{ ml: "4px",display:"flex", gap:"10px",mt:"20px"}} item xs={12}>
          <Button
            variant="contained"
            style={buttonStyle}
            className="capitalize-button"
            
            sx={{
              maxHeight:"50px",
              fontSize:"15px" ,
              backgroundColor: "#414141",
              color: "white",
              borderRadius:"10px"
              
            }}
          >
            Whitepaper
          </Button>

          <Button
            variant="contained"
           className="capitalize-button"
            style={buttonStyle} 
            sx={{
              maxHeight:"50px",
              fontSize:"15px" ,
              maxHeight:"50px",
              backgroundColor: "#2D1F38",
              color: "white",
              borderRadius:"10px",
              
             
            }}
          >
            Audit Report
          </Button>
          <Button
  className="capitalize-button"
  style={buttonStyle}
  variant="contained"
  sx={{
    maxHeight: "50px",
    fontSize: "15px",
    backgroundColor: "#462560",
    color: "white",
    borderRadius: "10px",
  }}
  onClick={() => window.open("https://game.gambet.io", "_blank")}
>
  Raffle Play
</Button>


       
        </Grid>

      
       
       


      </Grid>
    </div>
  );
};

export default Section1btns;
