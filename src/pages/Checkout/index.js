import { Box, Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../../reducer/cartSlice"
import { Link } from "react-router-dom"
import { ArrowCircleRight, DeleteOutline } from "@mui/icons-material"
import api from "../../services/api"
import DefaultModal from "../../components/DefaultModal"
import FormLogin from "../../components/FormLogin"
import FormNewAddress from "../../components/FormNewAddress"

const Checkout = () => {
  const theme = useTheme();
  const cart = useSelector(state => state.cart);
  const [userAdresses, setUserAdresses] = useState([]);
  const [openModalAddress, setOpenModalAddress] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(state => state.login);

  const handleRemove = (sku) => {
    dispatch(removeFromCart(sku))
  }

  const getUserAdresses = async () => {
    await api.get(`/addressbyuser/${user.id}`)
      .then((res) => {
        setUserAdresses(res.data)
      })
  }

  const handleCloseAddressModal = () => {
    setOpenModalAddress(false)
  }

  useEffect(() => {
    getUserAdresses();
  }, [openModalAddress])

  useEffect(() => {
    getUserAdresses();
  }, [])

  useEffect(() => {
    console.log("user", userAdresses);
  }, [userAdresses])

  return (
    <>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>Finalizar Compra</Typography>
      <Box sx={{ ...theme.boxPages }}>
        <Grid container sx={{ ...theme.container, }}>
          <Grid item sm={12}>
            <Typography variant="h3" align="left" sx={{ fontSize: '22px' }}>Selecione o endereço de entrega</Typography>
            <Divider sx={{ my: 2 }} />

            {userAdresses && (
              <>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Endereços Cadastrados</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={userAdresses}
                  label="Endereços Cadastrados"
                >
                  {userAdresses.map((item) => 
                    <MenuItem value={item.id_endereco}>{item.logradouro}, {item.numero} - {item.cep} - {item.cidade} - {item.estado}</MenuItem>
                  )}
                </Select>
              </FormControl>
              </>
            )}
            {!userAdresses && (
              <Typography>Você ainda não tem endereços cadastrados.</Typography>
            )}
            <Button variant="contained" sx={{my:2}} onClick={() => setOpenModalAddress(true)}>Cadastrar Endereço</Button>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label1">Forma de Pagamento</InputLabel>
                <Select
                  labelId="demo-simple-select-label1"
                  id="demo-simple-select"
                  // value={userAdresses}
                  label="Forma de Pagamento"
                >
                  
                    <MenuItem value="1">Transferência Bancária</MenuItem>
                    <MenuItem value="1">Depósito em Conta</MenuItem>
                  
                </Select>
              </FormControl>
              <Link to='/thanks'><Button fullWidth variant="contained" sx={{my:2}}>Concluir Compra</Button></Link>
          </Grid>
        </Grid>
      </Box>
      <DefaultModal
        open={openModalAddress}
        title={"Cadastrar novo endereço"}
        content={<FormNewAddress closeModal={handleCloseAddressModal} getUserAdresses={getUserAdresses} />}
        onClose={() => setOpenModalAddress(false)}
      />
    </>
  )
}

export default Checkout