import React, { useState } from "react";
import { TextField, InputBase, GlobalStyles, Popover, Typography, Grid, Link, Divider } from '@mui/material';


const FormLogin = () => {

  const [showForm, setShowForm] = useState('login');

  return (
    <>
      {showForm == 'login' && (
        <form>
          <Grid container md={12}>
            <Grid item md={12}>
              <Typography variant="h2">Faça seu Login</Typography>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ py: 1 }}><TextField id="outlined-basic" label="Usuário" variant="outlined" fullWidth /></Typography>
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ py: 1 }}><TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth /></Typography>
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ textAlign: 'center' }}>Ainda não tem uma conta? <Link sx={{ cursor: 'pointer' }} onClick={() => setShowForm('cadastro')}>Clique aqui.</Link></Typography>
            </Grid>
          </Grid>
        </form>
      )}
      {showForm == 'cadastro' && (
        <form>
          <Grid container md={12}>
            <Grid item md={12}>
              <Typography variant="h2">Cadastre-se</Typography>
              <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ py: 1 }}><TextField id="outlined-basic" label="Nome Completo" variant="outlined" fullWidth /></Typography>
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ py: 1 }}><TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth /></Typography>
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ py: 1 }}><TextField id="outlined-basic" label="Telefone" variant="outlined" fullWidth /></Typography>
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ py: 1 }}><TextField id="outlined-basic" label="CPF" variant="outlined" fullWidth /></Typography>
            </Grid>
            <Grid item md={12}>
              <Typography sx={{ textAlign: 'center' }}>Já tem uma conta? <Link sx={{ cursor: 'pointer' }} onClick={() => setShowForm('login')}>Clique aqui.</Link></Typography>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  )
}

export default FormLogin