import { Container, Grid, styled, Typography } from "@material-ui/core"
import { StylesContext } from "@material-ui/styles"
import styles from "../styles/About.module.css";

export const About = () => {
    return (
        <Container>
        <Grid align="center">        
            <Typography variant="h3" gutterBottom>WHO IS JUSTIN DETAIL</Typography>
             <Typography variant="h5" gutterBottom>car wash & detailing service</Typography>           
             <Typography variant="subtitle1" paragraph>
            <span>Justin Detail is an eco-friendly, on-demand, contactless car wash and detailing service based in Little Rock, AR. Our company was founded back in 2020 by a team of experts with more then 10 years of professional car wash experience. Our goal is to provide our customers with the friendliest, most convenient hand car wash experience possible. We use the most modern and up-to-date water reclamation modules as a part of our car wash systems. Our products are all biodegradable and eco-friendly.</span>
            </Typography>
            <Grid container spacing={2} columns={4}>
            {/* card - needs image*/}
            <Grid item xs={8}>
                <h1>The Best Car Wash & Detail</h1>
                <ul>
                    <li>We offer multiple services at a great value</li>
                    <li>On-demand & Contactless service</li>
                    <li>Biodegradble and eco-friendly products</li>
                    <li>Pay for your wash electronically and securely</li>
                    <li>Trained and skilled crew members</li>
                </ul>
            
            </Grid>
            <Grid>
            {/* card - needs image*/}
                <h1>Contacting Us</h1>
                <ul>
                    <li>We offer multiple services at a great value</li>
                    <li>On-demand & Contactless service</li>
                    <li>Biodegradble and eco-friendly products</li>
                    <li>Pay for your wash electronically and securely</li>
                    <li>Trained and skilled crew members</li>
                </ul>
                </Grid>
                </Grid>
                </Grid>
            </Container>
    )
}
