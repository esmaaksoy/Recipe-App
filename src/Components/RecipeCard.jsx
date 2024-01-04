import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function RecipeCard({ data }) {
  console.log(data);
  const { image, label, ingredients, calories, id } = data.recipe;
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea
        onClick={() => navigate("/dashboard/details", { state: data.recipe })}
      >
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:"center"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: "1",
            }}
          >
            {label}
          </Typography>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"1rem"}
            flexWrap={"wrap"}
            marginBottom={2}
          >
            <Typography>{calories.toFixed(1)} CALORİES</Typography>
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>|</Typography>
            <Typography >{ingredients.length}INGREDIENTS</Typography>
          </Stack>
          <Button variant="text" color="success">See more</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
