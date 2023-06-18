import React from 'react';
import { useTheme } from '@mui/material/styles';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../reducer/cartSlice';

const Thanks = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ ...theme.boxPages, my: 5 }}>
        <Grid container sx={{ ...theme.container, }} textAlign='center'>
          <Grid item sm={12} sx={{ pr: 5 }}>
            <Typography variant='h2' sx={{fontSize: '22px'}} textAlign="center">Parabéns! Seu pedido foi concluído com sucesso.</Typography>
            <Typography textAlign="center">Você receberá uma confirmação por e-mail.</Typography>
            <Typography textAlign="center">Em caso de dúvidas entre em contato conosco através de nosso Suporte.</Typography>
            <Link to='/'><Button sx={{my:3}} variant='contained'>Voltar para a Home</Button></Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Thanks