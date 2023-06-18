import React, { useEffect, useState } from "react";
import { TextField, InputBase, GlobalStyles, Popover, Typography, Grid, Link, Divider, Button, Alert, Snackbar, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useForm } from 'react-hook-form';
import api from "../../services/api";
import { useDispatch, useSelector } from 'react-redux';
import { addLogin } from "../../reducer/loginSlice";

const FormNewAddress = (props) => {

  const dispatch = useDispatch();

  const { closeModal, getUserAdresses } = props;

  const [showForm, setShowForm] = useState('login');
  const [message, setMessage] = useState();
  const [open, setOpen] = useState();
  const [openDialog, setOpenDialog] = useState();
  const [userLogado, setUserLogado] = useState();

  const {
    register,
    formState,
    handleSubmit,
    watch,
  } = useForm();

  const formAddress = {
    mode: "onChange",
    defaultValues: {
      email_login: "",
      senha_login: ""
    }
  }

  let user = useSelector(state => state.login);

  const handleRegister = async (data) => {
    let newAddress = {
      cep: data.cep,
      logradouro: data.logradouro,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      complemento: data.complemento,
      id_usuario: user.id
    }
    console.log("newAddress", newAddress)
    try {
      await api.post('/saveaddress', newAddress)
        .then((res) => {
          if (res.status == 201) {
            setMessage("Cadastro realizado com sucesso!")
          }
        })
        .then(getUserAdresses())
        .then(closeModal())
    } catch (error) {
      setMessage("Não foi possível salvar o endereço")
      setOpen(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
    closeModal();
  }

  useEffect(() => {
    setUserLogado(user)
  }, [user])

  return (
    <>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Grid container spacing={1}>
            <Grid item sm={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="cep" label="CEP" variant="outlined" fullWidth {...register("cep")} />
            </Grid>
            <Grid item sm={9}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="logradouro" label="Logradouro" variant="outlined" fullWidth {...register("logradouro")} />
            </Grid>
            <Grid item sm={3}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="numero" label="Número" variant="outlined" fullWidth {...register("numero")} />
            </Grid>
            <Grid item sm={4}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="bairro" label="Bairro" variant="outlined" fullWidth {...register("bairro")} />
            </Grid>
            <Grid item sm={4}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="cidade" label="Cidade" variant="outlined" fullWidth {...register("cidade")} />
            </Grid>
            <Grid item sm={4}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="estado" label="Estado" variant="outlined" fullWidth {...register("estado")} />
            </Grid>
            <Grid item sm={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="complemento" label="Complemento" variant="outlined" fullWidth {...register("complemento")} />
            </Grid>
            <Grid item md={12}>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 4 }}>Cadastrar</Button>
            </Grid>
          </Grid>
          
        </form>
    </>
  )
}

export default FormNewAddress