import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../../reducer/cartSlice"
import { Link } from "react-router-dom"
import { ArrowCircleRight, DeleteOutline } from "@mui/icons-material"

const Cart = () => {
  const theme = useTheme();
  const cart = useSelector(state => state.cart);
  const [productsCart, setProductsCart] = useState([]);
  const dispatch = useDispatch();

  const handleRemove = (sku) => {
    dispatch(removeFromCart(sku))
  }

  useEffect(() => {
    setProductsCart(cart);
  }, [cart])

  return (
    <>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>Finalizar Compra</Typography>
      {productsCart.length > 0 && (
        <>
          <Box sx={{ ...theme.boxPages }}>
            <Grid container sx={{ ...theme.container, }}>
              <Grid item sm={12}>
                <Typography variant="h3" align="left" sx={{ fontSize: '22px' }}>Carrinho</Typography>
                <Divider sx={{ my: 2 }} />
              </Grid>
              <Grid item sm={12} sx={{ pt: 1 }}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item sm={1}>
                    <Typography>Imagem</Typography>
                  </Grid>
                  <Grid item sm={3}>
                    <Typography>Nome</Typography>
                  </Grid>
                  <Grid item sm={1}>
                    <Typography>Tamanho</Typography>
                  </Grid>
                  <Grid item sm={2}>
                    <Typography>Valor</Typography>
                  </Grid>
                  <Grid item sm={2}>
                    <Typography>Valor Promocional</Typography>
                  </Grid>
                  <Grid item sm={3}>

                  </Grid>
                  <Grid item sm={12} sx={{ pt: 0 }}>
                    <Divider sx={{ mb: 1 }} />
                  </Grid>
                </Grid>

                {productsCart?.map((item) =>
                  <>
                    <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ my: 1 }}>
                      <Grid item sm={1}>
                        <img src={`/images/produtos/${item.imagemDestaque}`} style={{ maxWidth: '100%' }} />
                      </Grid>
                      <Grid item sm={3}>
                        <Typography>{item.nome}</Typography>
                      </Grid>
                      <Grid item sm={1}>
                        <Typography>{parseInt(item.tamanho)}</Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography>R$ {item.valor}</Typography>
                      </Grid>
                      <Grid item sm={2}>
                        <Typography>R$ {item.desconto}</Typography>
                      </Grid>
                      <Grid item sm={3}>
                        <Button fullWidth variant="outlined" size="small" onClick={() => handleRemove(item.sku)}>Remover do Carrinho</Button>
                      </Grid>
                      <Grid item sm={12} sx={{ mt: 1 }}>
                        <Divider />
                      </Grid>
                      <Grid item sm={6} sx={{ mt: 1 }}>
                        <Button variant="contained" sx={{my: 4}} startIcon={<DeleteOutline />}>Limpar Carrinho</Button>
                      </Grid>
                      <Grid item sm={6} sx={{ mt: 1 }} textAlign="right">
                        <Link to="/checkout"><Button variant="contained" sx={{my: 4}} endIcon={<ArrowCircleRight />}>Finalizar Compra</Button></Link>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      {!productsCart.length && (
        <Box sx={{ ...theme.boxPages }}>
          <Grid container sx={{ ...theme.container, }}>
            <Grid item sm={12} textAlign="center">
              <Typography align="center">Você ainda não tem produtos no carrinho.</Typography>
              <Link to="/"><Button variant="contained" sx={{my: 4}}>Voltar para a Home</Button></Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}

export default Cart