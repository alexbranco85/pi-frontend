import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cartSlice, { removeFromCart, reset } from '../../reducer/cartSlice';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MiniCart = () => {
  const theme = useTheme();
  const [productsCart, setProductsCart] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)

  const handleRemove = (sku) => {
    dispatch(removeFromCart(sku))
  }

  useEffect(() => {
    setProductsCart(cart)
  }, [cart])

  return (
    <Box sx={{ p: 2 }}>
      <Typography><strong>Produtos no Carrinho</strong></Typography>
      <Divider sx={{ my: 2 }} />
        { productsCart?.map((item) => (
          <>
            <Stack container direction='row' sx={{ mb: 1 }}>
              <Box sx={{ width: '75px', height: '75px', border: '1px solid #999', borderRadius: 2, display: 'flex', alignItems: 'center', mr: 2 }}>
                <img src={`/images/produtos/${item.imagemDestaque}`} style={{ maxWidth: '100%' }} />
              </Box>
              <Box>
                <Typography>{item.nome}</Typography>
                <Typography>R$ {item.valor}</Typography>
                <Button variant='outlined' size='small' onClick={() => handleRemove(item.sku)}>Remover do Carrinho</Button>
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
          </>
        ))}
        {productsCart.length ?
          <Link to='/cart'><Button variant='contained' fullWidth size='small'>Fechar Pedido</Button></Link>
          : <Typography>Você ainda não adicionou produtos no carrinho.</Typography>
        }
    </Box>
  )
}

export default MiniCart