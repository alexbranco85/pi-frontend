import React from 'react';
import { useTheme } from '@mui/material/styles';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducer/cartSlice';

const SingleProduct = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { sku } = useParams();
  const [product, setProduct] = useState();
  const [tamanho, setTamanho] = useState('');
  const [related, setRelated] = useState([])

  let cart = useSelector((state) => state.data)

  const getProduct = async () => {
    await api.get(`/produto/${sku}`)
      .then((res) => {
        setProduct(res.data)
        if(res.status == 200){
          getRelated()
        }
      })
  }

  const getRelated = async () => {
      await api.get('/featured')
        .then((res) => setRelated(res.data))
  }

  const handleChange = (event) => {
    setTamanho(event.target.value);
  };

  const handleClickAddCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    getProduct();
  }, [sku])

  return (
    <>
      <Box sx={{ ...theme.boxPages, my: 5 }}>
        <Grid container sx={{ ...theme.container, }}>
          <Grid item sm={6} sx={{ pr: 5 }}>
            <Stack sx={{ border: '1px solid #d9d9d9', borderRadius: 7, display: 'flex', height: '550px', alignItems: 'center', justifyContent: 'center' }}>
              <img src={`/images/produtos/${product?.imagemDestaque}`} width='400px' />
            </Stack>
          </Grid>
          <Grid item sm={6}>
            <Typography variant='h1' sx={{ mt: 3 }}>{product?.nome}</Typography>
            <Typography>Sku: {product?.sku}</Typography>
            <Typography sx={{ mt: 5, mb: 0 }}>de R$ {product?.valor}</Typography>
            <Typography sx={{ mt: 0, mb: 0 }} variant='h2'><strong>por R$ {product?.desconto}</strong></Typography>
            <Typography sx={{ mt: 0, mb: 5 }}><strong>em até 10 parcelas de {(product?.desconto / 10).toFixed(2)} sem juros</strong></Typography>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Escolha seu Tamanho</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tamanho}
                label="Escolha seu Tamanho"
                onChange={handleChange}
              >
                <MenuItem value={34}>34</MenuItem>
                <MenuItem value={35}>35</MenuItem>
                <MenuItem value={36}>36</MenuItem>
              </Select>
            </FormControl>

            <Button onClick={handleClickAddCart} variant='contained' size='large' sx={{ mt: 5, mb: 5 }}>Adicionar ao Carrinho</Button>

            <Typography>Frete Grátis para todo o Brasil em compras acima de R$ 299,90</Typography>
            <Typography>5% de desconto em pagamento por boleto ou pix</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: theme.palette.primary.gray, ...theme.boxPages, py: 8 }}>
        <Stack container sx={{ ...theme.container, }} direction='row' justifyContent='space-between'>
          <Stack>
            <Typography variant='h2' sx={{ mt: 3 }}>Descrição</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>{product?.descricao}</Typography>
          </Stack>
          <Stack sx={{ px: 2 }}>
            <img src={`/images/produtos/${product?.imagemDestaque}`} width='400px' />
          </Stack>
        </Stack>
      </Box>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>PRODUTOS RELACIONADOS</Typography>
      <Box sx={{ ...theme.boxPages }}>
        <Grid container sx={{ ...theme.container, }}>

          {related?.map((item) => (
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

export default SingleProduct