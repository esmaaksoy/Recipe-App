import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function RecipeCard({ data }) {
  console.log(data.recipe);
  const { image, label, ingredients, calories, id } = data.recipe;
  console.log(data);
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea
        onClick={() => navigate("/dashboard/details", { state: data.recipe })}
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"1rem"}
          >
            <Typography>{calories.toFixed(1)} CALORİES</Typography>
            <span>I</span>
            <Typography>{ingredients.length}INGREDIENTS</Typography>
          </Stack>
          <Button variant="contained">DETAİLS</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}