import axios from "axios";
import { Button, Container, Paper, Box, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../features/productSlice";
import Loading from "./Loading";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const pro = useParams();
  const productId = pro.id;
  const URL = `https://fakestoreapi.com/products/${productId}`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.value);
  const { title, image, price, description, category } = products;

  const fetchSingleProduct = async () => {
    const response = await axios.get(URL).catch((err) => "err");
    setLoading(!loading);
    dispatch(singleProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchSingleProduct();
  }, [productId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Grid container  marginY={7}>
            <Grid item xs={12}>
              <Paper item sx={{ margin: "3rem auto" }} elevation={5}>
                <Button
                  sx={{ margin: "1rem" }}
                  variant="contained"
                  onClick={() => navigate("/")}
                >
                  back
                </Button>

                <Grid padding={3} container>
                  <Grid item md={6} xs={12}>
                    <img className="img-single" src={image} alt={title} />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography sx={{paddingTop:'15px'}}>
                      <span className="title">{title}</span>
                    </Typography>
                    <Typography className="fw-bold">
                      <strong>Category : </strong>
                      <span className="text-secondary">{category}</span>{" "}
                    </Typography>
                    <Typography className="fw-bold">
                      <strong>Price: </strong>
                      <span className="text-secondary">{price} $</span>
                    </Typography>
                    <Typography className="fw-bold">
                      <strong>Description : </strong>
                      <span className="text-secondary">{description}</span>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;
