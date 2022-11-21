import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  CardActions,
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function Home() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);
  const fetchALlProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  };

  useEffect(() => {
    fetchALlProducts();
  }, []);

  // {
  //   "id": 2,
  //   "title": "Mens Casual Premium Slim Fit T-Shirts ",
  //   "price": 22.3,
  //   "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket,
  //   "category": "men's clothing",
  //   "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //   "rating": {
  //     "rate": 4.1,
  //     "count": 259
  //   }

  return (
    <div>
      <Container sx={{py: 10}} maxWidth="lg">
        <Grid container spacing={4}>
          {products.map(({title, price, description, rating, id, image}) => (
            <Grid item key={id} xs={12} sm={6} md={3}>
              <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
                <CardMedia
                  component="img"
                  sx={{
                    alignSelf: "center",
                    width: theme.spacing(30),
                    height: theme.spacing(30),
                    objectFit: "contain",
                    pt: theme.spacing(),
                  }}
                  image={image}
                  alt={title}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "1",
                      "-webkit-box-orient": "vertical",
                    }}>
                    {title}
                  </Typography>
                  <Typography
                    paragraph
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "3",
                      "-webkit-box-orient": "vertical",
                    }}>
                    {description}
                  </Typography>
                  <Typography fontSize="large">{price}</Typography>
                  <Rating readOnly precision={0.5} value={rating.rate} />
                </CardContent>
                <CardActions
                  sx={{
                    alignSelf: "center",
                  }}>
                  <Button variant="contained" paragraph>
                    <ShoppingCartSharpIcon />
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
