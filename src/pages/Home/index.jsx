import React, { useEffect, useState } from "react";
import SliderHome from "../../components/SliderHome";
import { Box, Grid, ListItem, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { CreditCard, LocalShipping, LocationOn, Percent } from "@mui/icons-material";
import ProductCard from "../../components/ProductCard";
import api from "../../services/api";

const Home = () => {
  const theme = useTheme();
  const [ featuredProducts, setFeaturedProducts ] = useState();
  const [ saleProducts, setSaleProducts ] = useState();

  const getSaleProducts = async () => {
    const response = await api.get('sale');
    setSaleProducts(response.data);
  }

  const getFeaturedProducts = async () => {
    const response = await api.get('featured');
    setFeaturedProducts(response.data);
  }

  useEffect(() => {
    getSaleProducts()
    getFeaturedProducts()
  }, [])

  useEffect(() => {
    console.log("featuredProducts", featuredProducts)
  }, [featuredProducts])


  return (
    <>
      <SliderHome />
      <Box sx={{ ...theme.bgRosa, ...theme.boxPages }}>
        <Stack container sx={{ ...theme.container, }} direction='row' justifyContent='space-between'>
          <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, px: 3, py: 2 }}>
            <Typography color='white' sx={{ display: 'flex' }}><LocalShipping sx={{ mr: 1 }} />Frete Rápido e Seguro</Typography>
          </Stack>
          <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, p: 2 }}>
            <Typography color='white' sx={{ display: 'flex' }}><CreditCard sx={{ mr: 1 }} />Parcele em até 10x sem juros</Typography>
          </Stack>
          <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, p: 2 }}>
            <Typography color='white' sx={{ display: 'flex' }}><LocationOn sx={{ mr: 1 }} />Entregamos em todo Brasil</Typography>
          </Stack>
          <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, p: 2 }}>
            <Typography color='white' sx={{ display: 'flex' }}><Percent sx={{ mr: 1 }} />Desconto de 5% no boleto</Typography>
          </Stack>
        </Stack>
      </Box>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>AS MELHORES OFERTAS</Typography>
      <Box sx={{ ...theme.boxPages }}>
        <Grid container sx={{ ...theme.container, }}>
          {saleProducts?.map((item) => (
            <ProductCard
              column={3}
              title={item.nome}
              key={item.id}
              img={item.imagemDestaque}
              price={item.valor}
              sale={item.desconto} />
          ))}
        </Grid>
      </Box>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>PRODUTOS EM DESTAQUE</Typography>
      <Box sx={{ ...theme.boxPages }}>
        <Grid container sx={{ ...theme.container, }}>
          {featuredProducts?.map((item) => (
            <ProductCard
              column={3}
              title={item.nome}
              key={item.id}
              img={item.imagemDestaque}
              price={item.valor}
              sale={item.desconto} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Home