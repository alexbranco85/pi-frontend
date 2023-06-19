import { useEffect, useState } from "react"
import api from "../../../services/api"
import { Box, Button, Divider, Grid, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListProduct = () => {

  const [products, setProducts] = useState();
  const [user, setUser] = useState();
  const theme = useTheme();

  const userLogin = useSelector(state => state.login);

  const getProducts = async () => {
    await api.get('/all')
      .then((res) => setProducts(res.data.catProducts))
  }

  const removeProduct = async (id) => {
    await api.delete(`/product/${id}`)
      .then((res) => setProducts(res.data.catProducts))
      .then(() => getProducts())
  }

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    setUser(userLogin);
  }, [userLogin])

  return (
    <>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>Administrar Produtos</Typography>
      {user?.is_admin == 1 && (
        <Box sx={{ ...theme.boxPages }}>
          <Grid container sx={{ ...theme.container, }}>
            <Link to="/admin/product/create"><Button variant="contained" sx={{ my: 2 }}>Adicionar Produto</Button></Link>
            {products?.map((item) =>
              <>
                <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ my: 1 }}>
                  <Grid item sm={1}>
                    <img src={`/images/produtos/${item.imagemDestaque}`} style={{ maxWidth: '100%' }} />
                  </Grid>
                  <Grid item sm={3}>
                    <Typography>{item.nome}</Typography>
                  </Grid>
                  <Grid item sm={2}>
                    <Typography>R$ {item.valor}</Typography>
                  </Grid>
                  <Grid item sm={2}>
                    <Typography>R$ {item.desconto}</Typography>
                  </Grid>
                  <Grid item sm={2}>
                    <Link to={`/admin/product/edit/${item.sku}`}><Button fullWidth variant="outlined" size="small">Editar</Button></Link>
                  </Grid>
                  <Grid item sm={2}>
                    <Button fullWidth variant="outlined" size="small" onClick={() => { removeProduct(item.id) }}>Remover</Button>
                  </Grid>
                  <Grid item sm={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Box>
      )}
      {(!user || user?.is_admin != 1) && (
        <Box sx={{ ...theme.boxPages }}>
          <Grid container sx={{ ...theme.container, textAlign: "center" }}>
            <Grid item sm={12}>
              <Typography sx={{ textAlign: "center" }}>Você não tem permissão para acessar essa página.</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}

export default ListProduct