import React, { useEffect, useState } from "react";
import { TextField, InputBase, GlobalStyles, Popover, Typography, Grid, Link, Divider, Button, Alert, Snackbar, Dialog, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useForm } from 'react-hook-form';
import api from "../../services/api";
import { useDispatch } from 'react-redux';
import { addLogin } from "../../reducer/loginSlice";

const FormLogin = (props) => {

  const dispatch = useDispatch();

  const { closeModal } = props;

  const [showForm, setShowForm] = useState('login');
  const [message, setMessage] = useState();
  const [open, setOpen] = useState();
  const [openDialog, setOpenDialog] = useState();

  const {
    register: login,
    formState: { errors: errorsLogin },
    handleSubmit: handleSubmitLogin,
    watch: watchLogin,
  } = useForm();

  const {
    register: cadastro,
    formState: { errors: errorsCadastro },
    handleSubmit: handleSubmitCadastro,
    watch: watchCadastro,
  } = useForm();

  const formLogin = {
    mode: "onChange",
    defaultValues: {
      email_login: "",
      senha_login: ""
    }
  }

  const formRegister = {
    mode: "onChange",
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
    }
  }

  const handleLogin = async (data) => {
    let user = {
      email: data.email_login,
      pwd: data.senha_login
    }
    try {
      await api.post('/login', user)
        .then((res) => {
          const userAuth = {
            nome: res.data.nome,
            email: res.data.email,
            id: res.data.id,
            is_admin: res.data.is_admin,
          }
          dispatch(addLogin(userAuth))
        })
        .then(() => {
          setMessage("Login realizado com sucesso. Aproveite suas compras.")
          setOpenDialog(true);
        })
    } catch (error) {
        setMessage("Erro ao efetuar Login. Confira seu e-mail e senha!");
        setOpen(true);
    }
  }

  const handleRegister = async (data) => {
    let newUser = {
      nome: data.nome,
      email: data.email,
      pwd: data.pwd,
      cpf: data.cpf,
      telefone: data.telefone
    }
    try {
      await api.post('/user', newUser)
        .then((res) => {
          if (res.status == 201) {
            setMessage("Cadastro realizado com sucesso. Realize seu login e aproveite nossas ofertas.")
            setOpenDialog(true);
          }
        })
    } catch (error) {
      setMessage("O usuário já existe ou os dados são inválidos!")
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

  return (
    <>

      <Dialog
        open={openDialog}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Fechar</Button>
        </DialogActions>
      </Dialog>


      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {showForm == 'login' && (
        <form onSubmit={handleSubmitLogin(handleLogin)}>
          <Grid container md={12}>
            <Grid item md={12}>
              <Typography variant="h2">Faça seu Login</Typography>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" name="email_login" label="E-mail" variant="outlined" fullWidth {...login("email_login")} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" type="password" name="senha_login" label="Senha" variant="outlined" fullWidth {...login("senha_login")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ textAlign: 'center' }}>Ainda não tem uma conta? <Link sx={{ cursor: 'pointer' }} onClick={() => setShowForm('cadastro')}>Clique aqui.</Link></Typography>
            </Grid>
            <Grid item md={12}>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 4 }}>Entrar</Button>
            </Grid>
          </Grid>
        </form>
      )}
      {showForm == 'cadastro' && (
        <form onSubmit={handleSubmitCadastro(handleRegister)}>
          <Grid container md={12}>
            <Grid item md={12}>
              <Typography variant="h2">Cadastre-se</Typography>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" label="Nome" name="nome" variant="outlined" fullWidth {...cadastro("nome")} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" label="E-mail" name="email" variant="outlined" fullWidth {...cadastro("email")} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" label="Telefone" name="telefone" variant="outlined" fullWidth {...cadastro("telefone")} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" label="CPF" name="cpf" variant="outlined" fullWidth {...cadastro("cpf")} />
            </Grid>
            <Grid item md={12}>
              <TextField sx={{ my: 1 }} required id="outlined-basic" type="password" label="Senha" name="pwd" variant="outlined" fullWidth {...cadastro("pwd")} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ textAlign: 'center' }}>Já tem uma conta? <Link sx={{ cursor: 'pointer' }} onClick={() => setShowForm('login')}>Clique aqui.</Link></Typography>
            </Grid>
            <Grid item md={12}>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 4 }}>Cadastrar</Button>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  )
}

export default FormLogin