import { Box, Button, Card, CardContent, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Image } from 'mui-image';

const ProductCard = (props) => {
  const theme = useTheme();

  const { columns, title, img, price, sale } = props;

  let columnsConfig = columns == 2 ? 2 : columns == 3 ? 4 : 3;

  return (
    <Grid item xs={3} sm={3} md={3} sx={{ p: 1 }}>
      <Box sx={{ ...theme.productCard, px: 2, py: 4 }}>
        <Stack sx={{ backgroundColor: 'transparent' }}>
          <Stack sx={{ height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={`./images/produtos/${img}`} showLoading width='100%' textAlign='center' style={{ marginBottom: 1 }} />
          </Stack>
          <Typography sx={{ fontSize: '18px', minHeight: '54px', mb: 2 }}><strong>{title}</strong></Typography>
          <Typography sx={{ mb: 3 }}><span style={{ textDecoration: 'line-through' }}>De: R$ {price}</span> <strong>por R$ {sale}</strong></Typography>
          <Button variant='outlined' size='large'>Comprar</Button>
        </Stack>
      </Box>
    </Grid>
  )
}

export default ProductCard