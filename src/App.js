import { createTheme, ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter"
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
       <AppRouter />
      {/* <Navbar />

      <Home/>
      <Footer/> */}
    </ThemeProvider>
  );
}

export default App;
