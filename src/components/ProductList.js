import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../features/productSlice";
import ProductComponent from "./ProductComponent";
import { Grid, Container } from "@mui/material";
import Loading from "./Loading";

const ProductList = () => {
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(BASE_URL)
      .catch((err) => console.log("error"));
    setLoading(!loading);
    dispatch(getProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Grid marginY={10} container spacing={2}>
          <ProductComponent />
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
