import { Button, Card, Grid } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const Section11 = () => {


  return (
    <div className='sec11'>
     <Grid container spacing ={2}>
        <Grid item xs={12}>
        <Typography
            variant="h4"
            sx={{
              fontFamily: "Segoe UI",
              color: "white",
              fontWeight: 900,
              ml:"4px",
              marginTop:"70px",
              marginBottom:"70px",
              fontSize:"50px"

              // Added margin-bottom
            }}
          >
         FAQs
          </Typography>

        </Grid>

        <Grid item xs={12}>
        <div>
        <Accordion className='acc' sx={{ background: 'transparent' }}>
  <AccordionSummary
    sx={{ color: 'white' }}
    expandIcon={<ExpandMoreIcon sx={{ color: 'white'}} />}
    aria-controls="panel1a-content"
    id="panel1a-header"
    style={{ borderBottom: '1px solid white' }}
  >
    <Typography>What is GAMBET?</Typography>
  </AccordionSummary>
  <AccordionDetails sx={{color:"white"}}>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>

     
      <Accordion  className='acc'  sx={{ background: 'transparent' }}> 
        <AccordionSummary
         sx={{ color: "white" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ borderBottom: "1px solid white" }}
        >
          <Typography>How can I buy $GAMBET?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"white"}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  className='acc'  sx={{ background: 'transparent' }}>
        <AccordionSummary
         sx={{ color: "white" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ borderBottom: "1px solid white" }}

        >
          <Typography>What is the difference between GAMBET and competitors?</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{color:"white"}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  className='acc'  sx={{ background: 'transparent' }}>
        <AccordionSummary
        sx={{ color: "white" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ borderBottom: "1px solid white" }}

        >
          <Typography>What makes GAMBET sustainable in the long term?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"white"}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  className='acc'  sx={{ background: 'transparent' }}>
        <AccordionSummary
        sx={{ color: "white" }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ borderBottom: "1px solid white" }}
        >
          <Typography>What is the GAMBET Pre-Sale and what happens if not all tokens are sold?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"white"}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  className='acc'  sx={{ background: 'transparent' }}>
        <AccordionSummary
         sx={{ color: "white" }} 
          expandIcon={<ExpandMoreIcon  sx={{ color: "white" }}  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ borderBottom: "1px solid white" }}
        >
          <Typography>When will be the launch of the tokens?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:"white"}}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>


        </Grid>

     </Grid>
    </div>
  )
}

export default Section11
