import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber, yellow, red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: red,
    secondary: yellow,
  },
});

theme = responsiveFontSizes(theme);

export default theme;