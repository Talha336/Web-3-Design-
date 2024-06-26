import React from "react";
import Grid from "@mui/material/Grid";
import Section1part1 from "./Section1part1";
import Section1card from "./Section1card";

const Section1 = () => {
  return (
    <div className="section1" style={{ color: "white" }}>
       <Grid container spacing={2} flexDirection="row" sx={{ justifyContent: "center" }}>
        <Grid item xs={12}>
          
            <Grid container spacing={2} justifyContent="center" >
              <Grid item xs={8}>
               <Section1part1/>
              </Grid>

              <Grid item xs={4}>
               <Section1card/>
              </Grid>
             
            </Grid>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Section1;
