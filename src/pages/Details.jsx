import { Card, CardMedia, Stack, Typography, Box } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const {
    image,
    label,
    dishType,
    cuisineType,
    ingredientLines,
    shareAs,
    totalNutrients: { FAT, CHOCDF, CHOLE, PROCNT, NA, CA, MG },
  } = data;
  console.log(data);

  return (
    <Stack
      // padding={4}
      sx={{
        width:{xs:"100%", sm:"100%",md:"70%" } ,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
        marginBottom: "2rem",
        padding:{xs:"1rem",sm:"1rem",md:"4rem"}
      }}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"auto"}
    >
      <Stack flexDirection={"row"} sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          // height="350px"
          sx={{ width: "50%", borderRadius: "2rem", height:{xs:"200px", sm:"250px",md:"350px"} }}
          image={image}
          alt={label}
        />
        <Box sx={{ width: "50%", marginLeft:{xs:"0.5rem", sm:"1rem", md:"3rem"} }}>
          <Typography variant="h4" marginBottom={"2rem"} fontFamily={"'Sevillana', cursive"} fontWeight={"bold"} sx={{fontSize:{xs:"1rem", sm:"2rem"}}}>
            {label}
          </Typography>
          <Typography marginBottom={"1rem"} fontWeight={"bold"}>
            DishType: 
            <Typography variant="span" color="#494545">
              {dishType}
            </Typography>
          </Typography>
          <Typography marginBottom={"1rem"} fontWeight={"bold"} >
            CuisineType: 
            <Typography variant="span" color="#494545">
              {cuisineType}
            </Typography>
          </Typography>
        </Box>
      </Stack>
      <Stack
        flexDirection={"row"}
        sx={{ width: "100%" }}
        justifyContent={"space-between"}
        padding={"1rem"}
      >
        <Box sx={{ width: "50%", border:"2px solid black", borderRadius:"2rem", padding:"2rem", marginRight:"2rem"  }}>
          <Typography variant="h5" paddingBottom={"1rem"} fontFamily={"'Sevillana', cursive"} fontWeight={"bold"}>
            Ingredients
          </Typography>

          {ingredientLines.map((item) => (
            <Typography>{item}</Typography>
          ))}
        </Box>
        <Box sx={{ width: "50%", border:"2px solid black", borderRadius:"2rem", padding:"2rem" }}>
          <Typography variant="h5" paddingBottom={"1rem"} fontWeight={"bold"} fontFamily={"'Sevillana', cursive"}>
            Nutrients
          </Typography>
          <Typography variant="body1">
            Total Fat: {FAT.quantity.toFixed(2)} {FAT.unit}
          </Typography>
          <Typography variant="body1">
            Carbohydrates: {CHOCDF.quantity.toFixed(2)} {CHOCDF.unit}
          </Typography>
          <Typography variant="body1">
            Cholesterol: {CHOLE.quantity.toFixed(2)} {CHOLE.unit}
          </Typography>
          <Typography variant="body1">
            Protein: {PROCNT.quantity.toFixed(2)} {PROCNT.unit}
          </Typography>
          <Typography variant="body1">
            Sodium: {NA.quantity.toFixed(2)} {NA.unit}
          </Typography>
          <Typography variant="body1">
            Calcium: {CA.quantity.toFixed(2)} {CA.unit}
          </Typography>
          <Typography variant="body1">
            Magnesium: {MG.quantity.toFixed(2)} {MG.unit}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Details;
