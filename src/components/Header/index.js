import { Grid, Box, AppBar, Menu, MenuItem, Typography, Button, IconButton, OutlinedInput, TextField, InputBase, GlobalStyles, Popover } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import MiniCart from '../MiniCart';
import ModalLoginRegister from '../DefaultModal';
import DefaultModal from '../DefaultModal';
import FormLogin from '../FormLogin';
import { Link } from 'react-router-dom';
import AccountMenu from '../AccountMenu';
import { useSelector } from 'react-redux';

const Header = () => {
  const theme = useTheme();
  const [openCart, setOpenCart] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElLogin, setAnchorElLogin] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openAccountMenu, setOpenAccountMenu] = useState(false);
  const [infosLogin, setInfosLogin] = useState(undefined)


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const idLogin = open ? 'simple-popover' : undefined;
  
  let userData = useSelector(state => state.login);

  const menu = [
    {
      "id": "1",
      "name": "Home",
      "link": "/",
    },
    {
      "id": "2",
      "name": "Para Eles",
      "link": "/categoria/1",
    },
    {
      "id": "3",
      "name": "Para Elas",
      "link": "/categoria/2"
    },
    {
      "id": "4",
      "name": "Todos",
      "link": "/todos",
    },
    {
      "id": "5",
      "name": "Contato",
      "link": "/contato",
    }
  ]

  const handleClickCart = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClickAccount = (event) => {
    setAnchorElLogin(event.currentTarget)
  }

  const handleCloseCart = () => {
    setAnchorEl(null);
  }

  const handleCloseLogin = () => {
    setOpenLogin(false);
  }

  const handleCloseAccountMenu = () => {
    setOpenAccountMenu(false)
  }

  const handleLogin = () => {
    if (!infosLogin || Array.isArray(infosLogin)) {
      setOpenLogin(true)
    } else {
      setOpenAccountMenu(true)
    }
  }

  const clearLogin = () => {
    setInfosLogin(undefined)
  }

  useEffect(() => {
    console.log("infosLogin", infosLogin)
  }, [infosLogin])

  useEffect(() => {
    setInfosLogin(userData)
  }, [userData])

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.primary.black, ...theme.header }}>
        <Grid container sx={{ ...theme.container, alignItems: 'center' }}>
          <Grid item md={2}>
            <img src='/images/logotipo.png' />
          </Grid>
          <Grid item md={6}>
            <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
              {menu.map((page) => (
                <Link to={page.link}>
                  <Button key={page.id}
                    sx={{ color: theme.palette.primary.white, mx: 1 }}>
                    {page.name}
                  </Button>
                </Link>
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
            <IconButton aria-label="Minha Conta" sx={{ my: 1 }} onClick={handleClickAccount}>
              <Person sx={{ color: theme.palette.primary.white }} onClick={() => handleLogin()} />
            </IconButton>
            <Popover
              id={idLogin}
              open={openAccountMenu}
              anchorEl={anchorElLogin}
              onClose={handleCloseAccountMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{ p: 2 }}>
              <AccountMenu onClose={handleCloseAccountMenu} clearLogin={() => clearLogin()} />
            </Popover>
            <IconButton aria-label="Meu Carrinho" sx={{ my: 1 }} onClick={handleClickCart}>
              <ShoppingCart sx={{ color: theme.palette.primary.white }} />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleCloseCart}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{ p: 2 }}>
              <MiniCart />
            </Popover>
            <IconButton aria-label="Meus Favoritos" sx={{ my: 1 }}>
              <Favorite sx={{ color: theme.palette.primary.white }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <DefaultModal
        open={openLogin}
        title={"Login / Cadastro"}
        content={<FormLogin closeModal={handleCloseLogin} />}
        textFirstButton={"Cancelar"}
        textSecondButton={"Fazer Login"}
        onClose={() => setOpenLogin(false)}
      />
    </>
  )
}

export default Header