import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { products } from '../../database/products';

const MiniCart = () => {
  const theme = useTheme();

  var items = ['./images/banner_01.png', './images/banner_02.png']

  return (
    <Box sx={{ p: 2 }}>
      <Typography><strong>Produtos no Carrinho</strong></Typography>
      <Divider sx={{ my: 2 }} />
      {products.map((item) => (
        <>
          <Stack container direction='row' sx={{ mb: 1 }}>
            <Box sx={{ width: '75px', height: '75px', border: '1px solid #999', borderRadius: 2, display: 'flex', alignItems: 'center', mr: 2 }}>
              <img src={`./images/produtos/${item.imagemDestaque}`} style={{ maxWidth: '100%' }} />
            </Box>
            <Box>
              <Typography>{item.nome}</Typography>
              <Typography>R$ {item.valor}</Typography>
              <Button variant='outlined' size='small'>Remover do Carrinho</Button>
            </Box>
          </Stack>
          <Divider sx={{ my: 2 }} />
        </>
      ))}
      <Button variant='contained' fullWidth size='small'>Fechar Pedido</Button>
    </Box>
  )
}

export default MiniCart