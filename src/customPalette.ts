import { createTheme } from "@mui/material";
import { red, teal, green, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#fff",
    },
    error: {
      main: red[600],
      contrastText: green[400],
    },
    warning: {
      main: "#ff9800",
      contrastText: "#fff",
    },
    info: {
      main: "#2196f3",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#fff",
    },
    background: {
      default: teal[50],
      paper: teal[300],
    },
  },
});

export default theme;
