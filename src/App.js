import { createTheme, ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#EEEEF8",
      },
      secondary: {
        main: "#FBCE3A",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
