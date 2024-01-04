import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Stack } from "@mui/material";
const Footer = () => {
  return (
      <>
        <Stack direction="column" position="fixed" bottom="20rem" left="2rem" spacing={2} color= 'black'>
          <TwitterIcon sx={{fontSize:"2rem", "&:hover":{color:"#88BF6F", fontSize:"3rem"},transition: "all 1s"}}/>
          <FacebookIcon sx={{fontSize:"2rem", "&:hover":{color:"#88BF6F", fontSize:"3rem"},transition: "all 1s"}}/>
          <InstagramIcon sx={{fontSize:"2rem", "&:hover":{color:"#88BF6F", fontSize:"3rem"},transition: "all 1s"}}/>
        </Stack>
        <Box
          position="fixed"
          bottom="8rem"
          left="2rem"
          sx={{ writingMode: "vertical-rl" }}
          color= 'black'
        >
          &copy; Copyright 2024
        </Box>
      </>
  );
};

export default Footer;
