
import { Button, Grid } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section1part1 from './Components/Section1part1';
import Section1btns from './Components/Section1btns';
import Section1card from './Components/Section1card';
import Section3pt1 from './Components/Section3pt1';
import Section3pt2 from './Components/Section3pt2';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import Section9 from './Components/Section9';
import Section10 from './Components/Section10';
import Section11 from './Components/Section11';
import Section12 from './Components/Section12';
import Section22 from './Components/Section22';
function App() {
  return (
    <div>
      <Grid container spacing ={2}>
        <Grid item xs={12}>
        <Navbar/>

        </Grid>
        <Grid item xs ={12}>
        <Section1part1/>

        </Grid>

       
        <Grid item xs={12}>
       
           <Section2/>

        </Grid>
        <Grid item xs={12} >

       <Section3/>
     

        </Grid>

        <Grid item xs ={12}>
          <Section4/>

        </Grid>

        <Grid item xs ={12}>
          <Section5/>

        </Grid>

        <Grid item xs ={12}>
          <Section6/>
              
        </Grid>

        <Grid item xs={12}>
          <Section7/>

        </Grid>

        <Grid item xs ={12}>
         <Section8/>

        </Grid>

        <Grid item xs={12}>
          <Section9/>

        </Grid>

        <Grid item xs={12}>
        <Section2/>

        </Grid>

        <Grid item xs={12}>
        <Section10/>

        </Grid>

        <Grid item xs={12}>

       <Section11/>
        </Grid>

        <Grid item xs ={12}>
       <Section12/>
        </Grid>


      
      </Grid>


     
       

       

      

       
        


       

     
  
    
 
   
  
   
  
       
    </div>
  );
}

export default App;
