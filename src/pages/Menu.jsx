import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Box, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeCard from "../Components/RecipeCard";
import Container from '@mui/material/Container';
const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState("breakfast");
  const [search, setSearch] = useState("");
  const API_ID = process.env.REACT_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const searchFood = async () => {
    let requestUrl = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`;
    try {
      const res = await axios(requestUrl);
      setRecipes(res.data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setRecipes([]);
    searchFood();
  };
  const mealTy = [
    {
      value: "Breakfast",
    },
    {
      value: "Brunch",
    },
    {
      value: "Lunch",
    },
    {
      value: "Snack",
    },
    {
      value: "Teatime",
    },
  ];
  useEffect(() => {
   searchFood()
  }, [])
  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack
          flexDirection={"row"}
          gap={"2rem"}
          margin={"3rem"}
          justifyContent={"center"}
          alignItems="flex-end"
          sx={{flexWrap:"wrap"}}
        >
          <Box>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>         
          <Box>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              size="small"
            sx={{ width: {
              xs: "200px", 
            },              
             }}
            >
              {mealTy.map((option) => (
                <MenuItem key={option.value} value={option.value} >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <Button variant="contained" type="submit" size="large">
             Search
            </Button>
          </Box>
        </Stack>
        <Grid container spacing={3}  justifyContent="center">
        {recipes.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={3} >
          <RecipeCard key={data.recipe.label} data={data} />
          </Grid>
        ))}      
        </Grid>
      </Box>
    </Container>
  );
};

export default Menu;
