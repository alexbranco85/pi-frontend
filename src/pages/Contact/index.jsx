import React from 'react';
import { useTheme, Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';



const Contact = () => {
    return (

<Box component="section">
  <Box style={{ padding: "80px 0" }}>
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h2">Contatos</Typography>
      <Box style={{ marginBottom: "30px" }}></Box>
      <Box style={{ display: "flex", justifyContent: "center", columnGap: "2rem" }}>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h3" style={{fontWeight: 900, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginLeft: "30px" }}>Rio de Janeiro</Typography>
          <Typography variant="p" style={{ fontWeight: 400, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginBottom: "100px", marginLeft: "10px" }}>Praia de Botafogo, 2000<br />sneakershouserio@sh.com.br</Typography>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h3" style={{ fontWeight: 900, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginLeft: "20px" }}>São Paulo</Typography>
          <Typography variant="p" style={{  fontWeight: 400, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginBottom: "100px", marginLeft: "10px" }}>Avenida Paulista, 2000<br />sneakershousesp@sh.com.br</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
</Box>
        
      );
  }



export default Contact;