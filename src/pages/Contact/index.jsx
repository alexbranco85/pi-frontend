import React from 'react';
import { Box, Typography, Grow } from '@mui/material';

const Contact = () => {
    return (

      <Box component="section">
      <Box style={{ padding: "40px 0" }}>
        <Box sx={{ textAlign: "center", backgroundColor: 'FAFAFA'}}>
          <Typography variant="h2" sx={{mb: 3}}>Contatos</Typography>
          <Box sx={{ marginBottom: "10px"}}>
            <Box sx={{ display: "flex", justifyContent: "center", columnGap: "2rem", borderTop: 1, borderColor: '#FF4F4F' }}>
              <Grow in={true} style={{ transitionDelay: '200ms' }}>
                <Box>
                  <Typography variant="h3" style={{ fontWeight: 900, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginLeft: "15px" }}>
                    Rio de Janeiro
                  </Typography>
                  <Typography variant="p" style={{ fontWeight: 400, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginLeft: "10px" }}>
                    Praia de Botafogo, 2000<br />sneakershouserio@sh.com.br
                  </Typography>
                </Box>
              </Grow>
              <Grow in={true} style={{ transitionDelay: '400ms' }}>
                <Box>
                  <Typography variant="h3" style={{ fontWeight: 900, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginLeft: "20px" }}>
                    São Paulo
                  </Typography>
                  <Typography variant="p" style={{ fontWeight: 400, fontSize: "30px", lineHeight: "60px", letterSpacing: "0.05em", marginTop: "50px", marginBottom: "100px", marginLeft: "10px" }}>
                    Avenida Paulista, 2000<br />sneakershousesp@sh.com.br
                  </Typography>
                </Box>
              </Grow>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    
      );
  }



export default Contact;