import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main:"#EEEEF8"
       
      },
      secondary:{
        main: "#FBCE3A",
      }
    },
  });
  return (
    <ThemeProvider theme = {theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
