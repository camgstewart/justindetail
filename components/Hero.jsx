import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Button, Container, Stack, Typography } from "@mui/material";

const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: `relative`,
        height: "100vh",
        width: `100vw`,
        overflow: `hidden`,
        zIndex: -100,
        mb: 15,
      }}
    > 
    
     <Grid 
    container
    item
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    >
        <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{
            color: "secondary.main",
            fontWeight: 400,
        }}
        >
        {title}
        </Typography>
        <Typography
        component="p"
        variant="h4"
        align="center"
        color="red"
        sx={{
            mb: 10,
        }}
        >
        {subtitle}
        </Typography>
        <Stack direction="row" spacing={2} alignContent="center">                   
                <Button variant="contained">BOOK APPOINTMENT</Button>
                <Button variant="outlined">SEE OUR WORK</Button> 
               </Stack>
    </Grid>
    
    
        </Grid>
   
  );
};

export default Hero;
