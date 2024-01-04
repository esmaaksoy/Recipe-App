import { Box, Button, Stack, Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      bgcolor={"#E7E8F5"}
      height={"100vh"}
      flexWrap={"wrap"}
      sx={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/18/15/02/food-2655261_640.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          component="h6"
          fontWeight="bold"
          // color= "#FBCE3A"
          color={"white"}
          fontFamily={"'Sevillana', cursive"}
        
        >
          Delicious Recipe
        </Typography>
        <NavLink to={"/login"}> 
        <Button variant="contained" sx={{bgcolor:"#FBCE3A", width:"100%", marginBottom:"2rem", color:"white",borderRadius:"2rem"}}>Login</Button>
        </NavLink>
        <NavLink to={"/register"}><Button variant="contained" sx={{ bgcolor:"#5D7543", width:"100%", color:"white",borderRadius:"2rem"}}>Register</Button></NavLink>
        
      </Box>
    </Stack>
  );
};

export default Home;
