import Container from "@mui/material/Container";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <>
    <Hero
          imgSrc={`/public/homepage-hero.jpg`}
          imgAlt="Justin Detail Employee Washing"
          title="From Express Detail to Full Size and out"
          subtitle="DETAILING SERVICES WITH A PERSONAL TOUCH"
        />
      <Container maxWidth="sm">
        
      </Container>
    </>
  );
};

export default Homepage;
