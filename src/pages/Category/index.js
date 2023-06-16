import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryPage = (props) => {
  const theme = useTheme();
  const [catProducts, setCatProducts] = useState();

  const { id } = useParams();

  const getCategoryProducts = async () => {
    if(!id){
      await api.get('/all')
        .then((res) => setCatProducts(res.data))
    } else {
      await api.get(`/categoria/${id}`)
        .then((res) => setCatProducts(res.data))
    }
  }

  useEffect(() => {
    getCategoryProducts()
    console.log("params", props)
    console.log("id", id)
  }, [id])

  useEffect(() => {
    console.log("catProducts", catProducts)
  }, [catProducts])

  return (
    <>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>{catProducts?.catName.nome}</Typography>
      <Box sx={{ ...theme.boxPages }}>
        <Grid container sx={{ ...theme.container, }}>
          {catProducts?.catProducts.map((item) => (
            <ProductCard
              column={3}
              title={item.nome}
              key={item.id}
              img={item.imagemDestaque}
              price={item.valor}
              sale={item.desconto}
              sku={item.sku} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default CategoryPage