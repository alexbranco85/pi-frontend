import * as React from 'react';
import theme from '../../theme';
import { Box, Grid, Button, IconButton, ButtonGroup, Typography, Divider } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.primary.black, ...theme.header }}>
      <Grid container sx={{ ...theme.container }}>
        <Grid item md={3}>
          <img src='./images/logotipo.png' />
          <Button variant="outlined" sx={{ my: 3 }}>Quem Somos</Button>
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ borderColor: '#fff'}}>
            <Button>
              <Facebook sx={{ color: theme.palette.primary.white }} />
            </Button>
            <Button>
              <Instagram sx={{ color: theme.palette.primary.white }} />
            </Button>
            <Button>
              <WhatsApp sx={{ color: theme.palette.primary.white }} />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item md={3} sx={{ px: 3, color: '#fff' }}>
          <Typography><strong>Para Eles</strong></Typography>
          <Divider color='#fff' sx={{ my: 2 }} />
          <Typography>Casual e Sapatênis</Typography>
          <Typography>Academia</Typography>
          <Typography>Basquete</Typography>
          <Typography>Skate</Typography>
          <Typography>Corrida</Typography>
          <Typography>Caminhada</Typography>
        </Grid>
        <Grid item md={3} sx={{ px: 3, color: '#fff' }}>
          <Typography><strong>Para Elas</strong></Typography>
          <Divider color='#fff' sx={{ my: 2 }} />
          <Typography>Casual e Sapatênis</Typography>
          <Typography>Academia</Typography>
          <Typography>Basquete</Typography>
          <Typography>Skate</Typography>
          <Typography>Corrida</Typography>
          <Typography>Caminhada</Typography>
        </Grid>
        <Grid item md={3} sx={{ pl: 3, color: '#fff' }}>
          <Typography><strong>Suporte</strong></Typography>
          <Divider color='#fff' sx={{ my: 2 }} />
          <Typography>Atendimento ao Cliente</Typography>
          <Typography>Formas de Pagamento</Typography>
          <Typography>Perguntas Frequentes</Typography>
          <Typography>Política de Entregas</Typography>
          <Typography>Política de Privacidade</Typography>
          <Typography>Termos e Condições de Uso</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer