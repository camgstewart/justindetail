import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import Navbar from "./Navbar";
import MuiNextLink from "../components/MuiNextLink";
import SideDrawer from "./SideDrawer";
import HideOnScroll from "./HideOnScroll";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import BackToTop from "./BackToTop";


const Offset = styled("div")(({ theme }) => theme.mixins.Toolbar);

const navLinks = [
    { title: `home`, path: `/` },
    { title: `about us`, path: `/about-us` },
    { title: `services`, path: `/services` },
    { title: `our work`, path: `/our-work` },
    { title: `book`, path: `/book` },
];

const Header = () => {
  return (
      <>
    <HideOnScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
           <MuiNextLink activeClassName="active" href="/">
           {/* insert logo here */}
           </MuiNextLink>
           <Navbar navLinks={navLinks} />
           <SideDrawer navLinks={navLinks} />
          </Container>
        </Toolbar>
        
      </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
          <Fab color="secondary" size="large" aria-label="back to top">
              <KeyboardArrowUp />
          </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
