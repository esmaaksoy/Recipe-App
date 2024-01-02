import { Card, CardMedia, Stack, Typography } from "@mui/material";
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
    totalNutrients: { FAT, CHOCDF,CHOLE,PROCNT,NA,CA,MG
    }
  } = data;

  return (
    <>
      <Stack flexDirection={"row"}>
        <CardMedia
          component="img"
          height="200px"
          width="100px"
          image={image}
          alt={label}
        />
        <div>
          <Typography>{label}</Typography>
          <Typography>
            <span>DishType:</span> {dishType}
          </Typography>
          <Typography>
            <span>cuisineType :</span> {cuisineType}
          </Typography>
        </div>
      </Stack>
      <Stack flexDirection={"row"}>
        <div>
      <Typography>Ingredients</Typography>
      
        {ingredientLines
.map((item)=><Typography>{item}</Typography>)}
      </div>
      <div>
      <Typography>Nutrients</Typography>
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
     
  
     
    

      </div>
    

      </Stack>
      <div>
      <Typography variant="body1">
      Preparation
        <a href={shareAs} target="_blank" rel="noopener noreferrer">
          
        </a>
      </Typography>
      </div>
    </>
  );
};

export default Details;