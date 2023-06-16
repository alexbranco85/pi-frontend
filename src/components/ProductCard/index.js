import { Box, Button, Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Image } from 'mui-image';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const theme = useTheme();

  const { columns, title, img, price, sale, sku } = props;

  let columnsConfig = columns == 2 ? 2 : columns == 3 ? 4 : 3;

  return (
    <Grid item xs={3} sm={3} md={3} sx={{ p: 1 }}>
      <Box sx={{ ...theme.productCard, px: 2, py: 4 }}>
        <Stack sx={{ backgroundColor: 'transparent' }}>
          <Stack sx={{ height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to={`/produto/${sku}`}>
              <img src={`/images/produtos/${img}`} showLoading width='100%' textAlign='center' style={{ marginBottom: 1 }} />
            </Link>
          </Stack>
          <Typography sx={{ fontSize: '18px', minHeight: '54px', mb: 2 }}><strong>{title}</strong></Typography>
          <Typography sx={{ fontSize: '18px', minHeight: '54px', mb: 2 }}><strong>{sku}</strong></Typography>
          <Typography sx={{ mb: 3 }}><span style={{ textDecoration: 'line-through' }}>De: R$ {price}</span> <strong>por R$ {sale}</strong></Typography>
          <Link to={`/produto/${sku}`}>
            <Button variant='outlined' size='large'>Comprar</Button>
          </Link>
        </Stack>
      </Box>
    </Grid>
  )
}

export default ProductCard