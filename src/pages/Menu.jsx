import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import RecipeCard from "../Components/RecipeCard";
import Pagination from "@mui/material/Pagination";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState("breakfast");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [nextPageLink, setNextPageLink] = useState(null);

  const API_ID = process.env.REACT_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const searchFood = async () => {
    let requestUrl = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}&from=${
      (currentPage - 1) * 10
    }&to=${currentPage * 10}&count=${nextPageLink}`;

    try {
      const res = await axios(requestUrl);
      setRecipes(res.data.hits);
      setTotalPages(Math.ceil(res.data.count / 10));

      if (res.data._links && res.data._links.next) {
        setNextPageLink(res.data._links.next.href);
      } else {
        setNextPageLink(null);
      }

      if (currentPage === totalPages) {
        setCurrentPage(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setRecipes([]);
    searchFood();
  };

  const handlePageChange = (value) => {
    setCurrentPage(value);
    // setRecipes([]);
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
  }, [currentPage])
  
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack
          flexDirection={"row"}
          gap={"2rem"}
          margin={"3rem"}
          justifyContent={"center"}
          alignItems="flex-end"
          sx={{flexWrap:"wrap"}}
        >
          <div>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
         
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              size="small"
            sx={{ width: {
              xs: "200px",  // Ekran boyutu < 600px
            },
              
             }}
            >

              {mealTy.map((option) => (
                <MenuItem key={option.value} value={option.value} >
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Button variant="contained" type="submit" size="large">
             Search
            </Button>
          </div>
        </Stack>
        <Grid container spacing={3} padding={"4rem"} justifyContent="center">
        {recipes.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={3} >
          <RecipeCard key={data.recipe.label} data={data} />
          </Grid>
        ))}      
        </Grid>
      </form>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default Menu;
