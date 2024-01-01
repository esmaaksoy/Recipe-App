import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
const Home = () => {
  return (
    <Stack direction="row" >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        bgcolor={"#E7E8F5"}
        width={"80%"}
        // height={"100vh"}
        // zIndex={1}
        // margin={"auto"}
      >
        <Box>
          <img
            src="https://cdn.pixabay.com/photo/2017/02/01/22/21/hot-dog-2031596_640.png"
            alt=""
          />
        </Box>
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h1"
            component="h6"
            fontWeight="bold"
            color="#DCDEEA"
          >
            01
          </Typography>
          <Typography
            variant="h3"
            component="h6"
            sx={{ position: "absolute", top: "3rem" }}
          >
            Delicious Recipe
          </Typography>
          <Typography
            variant="h6"
            sx={{ position: "absolute", top: "10rem", width: "20rem" }}
          >
            Freshly prepared for your special delight
          </Typography>
        
        </Box>
      </Stack>
      <Stack width={"20%"} bgcolor={"#EEEEF8"} position="relative">
      <Fab color="primary" aria-label="add"  sx={{position:"absolute", bottom:0}}>
          <AddIcon />
        </Fab>
      </Stack>
    </Stack>
  );
};

export default Home;
