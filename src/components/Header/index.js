import { Grid, Box, AppBar, Menu, MenuItem, Typography, Button, IconButton, OutlinedInput, TextField, InputBase, GlobalStyles } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { Favorite, Person, ShoppingCart } from '@mui/icons-material'

const Header = () => {
  const theme = useTheme();

  const menu = [
    {
      "id": "1",
      "name": "Home",
      "link": "#",
    },
    {
      "id": "2",
      "name": "Para Eles",
      "link": "#",
    },
    {
      "id": "3",
      "name": "Para Elas",
      "link": "#",
    },
    {
      "id": "4",
      "name": "Todos",
      "link": "#",
    },
    {
      "id": "5",
      "name": "Contato",
      "link": "#",
    }
  ]

  return (
    
      <Box sx={{ backgroundColor: theme.palette.primary.black, ...theme.header }}>
        <Grid container sx={{ ...theme.container, alignItems: 'center' }}>
          <Grid item md={2}>
            <img src='./images/logotipo.png' />
          </Grid>
          <Grid item md={6}>
            <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
              {menu.map((page) => (
                <Button key={page.id}
                  sx={{ color: theme.palette.primary.white, mx: 1 }}>
                  {page.name}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item md={2}>
            <GlobalStyles styles={{ TextField: { color: 'white' } }} />
            <TextField
              id="search" 
              label="Buscar" 
              variant="outlined" 
              color='secondary' 
              size='small' 
              fullWidth
              sx={{
                color: "#fff",
                '& input': {
                  color: '#fff',
                  fontSize: '0.9rem',
                  
                },
                '&. .MuiTextField-root': {
                  color: '#fff'
                },
                '& fieldset': {
                  borderColor: '#fff',
                },
                '& label': {
                  color: '#fff',
                  lineHeight: 1,
                }
              }} />
          </Grid>
          <Grid item md={2} sx={{ alignItems: 'center', justifyContent: 'right', display: 'flex' }}>
            <IconButton aria-label="Minha Conta" sx={{ my: 1 }}>
              <Person sx={{ color: theme.palette.primary.white }} />
            </IconButton>
            <IconButton aria-label="Meu Carrinho" sx={{ my: 1 }}>
              <ShoppingCart sx={{ color: theme.palette.primary.white }} />
            </IconButton>
            <IconButton aria-label="Meus Favoritos" sx={{ my: 1 }}>
              <Favorite sx={{ color: theme.palette.primary.white }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    
  )
}

export default Header