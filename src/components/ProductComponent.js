import * as React from "react";

import {
  Grid,
  Typography,
  Button,
  Rating,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";


import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.products.value);

  const renderList = products.map((product) => {
    const { id, title, image, price, rating, description, category } = product;

    return (
      <Grid key={id} className="animation" item md={3} xs={12}>
        <Link style={{ textDecoration: "none" }} to={`/products/${id}`}>
          <Card className="card-custom">
            <Box className="card-tag"># {category}</Box>

            <img src={image} alt={title} className="img-custom" />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontWeight: "900" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
              <Typography sx={{ color: "red" }} variant="h6">
                Price: {price} $
              </Typography>
              <Typography>
                <Rating
                  sx={{ marginY: "1rem" }}
                  name="read-only"
                  value={Math.round(Number(rating.rate))}
                  readOnly
                />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description.slice(0, 120) + " ..."}
              </Typography>
            </CardContent>
            <Button
              sx={{ display: "block", marginTop: "auto", marginX: "1rem" }}
              variant="contained"
              size="small"
            >
              view product
            </Button>
            <CardActions></CardActions>
          </Card>
        </Link>
      </Grid>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
