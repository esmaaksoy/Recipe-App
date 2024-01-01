import Navbar from "./Components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Components/Footer"
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
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
