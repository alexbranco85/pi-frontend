import { useEffect, useState } from "react"
import api from "../../../services/api"
import { Box, Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material"
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {

  const [product, setProduct] = useState();
  const theme = useTheme();
  const navigate = useNavigate();
  const { sku } = useParams();

  const {
    register,
    formState,
    watch,
    setValue,
    getValues,
    handleSubmit,
  } = useForm();

  const getProduct = async () => {
    await api.get(`/produto/${sku}`)
      .then((res) => {
        setProduct(res.data)
      })
  }

  const setFields = () => {
    if (product) {
      setValue("nome", product.nome)
      setValue("sku", product.sku)
      setValue("marca", product.marca)
      setValue("imagemDestaque", product.imagemDestaque)
      setValue("imagem", product.imagem)
      setValue("cor", product.cor)
      setValue("valor", product.valor)
      setValue("desconto", product.desconto)
      setValue("descricao", product.descricao)
      setValue("tamanho", product.tamanho)
      setValue("destaque", parseInt(product.destaque))
      setValue("oferta", parseInt(product.oferta))
      setValue("id_produto_categoria", parseInt(product.id_produto_categoria))
    }
  }

  const handleSubmitEdit = async (e) => {
    await api.put(`/product/${product.id}`, getValues())
      .then(navigate('/admin'))
  }

  useEffect(() => {
    getProduct()
  },[])

  useEffect(() => {
    setFields()
  },[product])

  return (
    <Container>
      <Typography variant="h3" align="center" sx={{ fontSize: '32px', mt: 8 }}>Criar Produto</Typography>
      <form onSubmit={handleSubmit(handleSubmitEdit)}>
        <Grid container rowSpacing={0} columnSpacing={2} sx={{ my: 3 }} >
          <Grid item sm={2}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="sku" label="Código do Produto" variant="outlined" fullWidth {...register("sku")} />
          </Grid>
          <Grid item sm={5}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="nome" label="Nome" variant="outlined" fullWidth {...register("nome")} />
          </Grid>
          <Grid item sm={5}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="marca" label="Marca" variant="outlined" fullWidth {...register("marca")} />
          </Grid>
          <Grid item sm={6}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="imagemDestaque" label="Imagem Destaque" variant="outlined" fullWidth {...register("imagemDestaque")} />
          </Grid>
          <Grid item sm={6}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="imagem" label="Imagem Secundária" variant="outlined" fullWidth {...register("imagem")} />
          </Grid>
          <Grid item sm={3}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="cor" label="Cor" variant="outlined" fullWidth {...register("cor")} />
          </Grid>
          <Grid item sm={3}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="valor" label="Preço" variant="outlined" fullWidth {...register("valor")} />
          </Grid>
          <Grid item sm={3}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="desconto" label="Preço com Desconto" variant="outlined" fullWidth {...register("desconto")} />
          </Grid>
          <Grid item sm={3}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="tamanho" label="Tamanho" variant="outlined" fullWidth {...register("tamanho")} />
          </Grid>
          <Grid item sm={12}>
            <TextField sx={{ my: 1 }} InputLabelProps={{ shrink: true }} required id="outlined-basic" name="descricao" label="Descrição" variant="outlined" fullWidth {...register("descricao")} />
          </Grid>
          <Grid item sm={4} sx={{ my: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Destaque</InputLabel>
              <Select label="Destaque" fullWidth {...register("destaque")} >
                <MenuItem value={0}>Não</MenuItem>
                <MenuItem value={1}>Sim</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} sx={{ my: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Oferta</InputLabel>
              <Select label="Oferta" fullWidth {...register("oferta")}>
                <MenuItem value={0}>Não</MenuItem>
                <MenuItem value={1}>Sim</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} sx={{ my: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Categoria</InputLabel>
              <Select label="Categoria" fullWidth {...register("id_produto_categoria")}>
                <MenuItem value={1}>Para Eles</MenuItem>
                <MenuItem value={2}>Para Elas</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={2}>
            <Link to="/admin"><Button fullWidth variant="contained" sx={{ my: 2 }}>Voltar</Button></Link>
          </Grid>
          <Grid item sm={2}>
            <Button fullWidth variant="contained" type="submit" sx={{ my: 2 }}>Salvar Produto</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default EditProduct