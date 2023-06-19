import React from 'react';
import { useTheme, Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
       <Box component="section" className="quem-somos" sx={{display: 'block'}}>
        <Box className="slide slide_01">
          <Box className="container">
          <Stack sx={{ backgroundPosition: 'center', justifyContent: 'center', backgroundRepeat: 'no-repeat' }}>
            <Link href="#">
                <img src="/images/banner-quem-somos.png" alt="Banner Quem Somos" width="100%" style={{ margin: '0 auto', display: 'block' }} />
            </Link>
          </Stack>
          <Box className="box-text" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant="p" className="titulo" sx={{display: 'flex', fontSize: '45px', marginLeft: '60px'}} mt={-50}>NÓS SOMOS A SNEAKERS HOUSE</Typography>
            <Typography variant="p" className="subtitulo" sx={{display: 'flex', fontSize: '24px', marginLeft: '60px'}}>Somos ousados, corajosos, apaixonados por estilo e conforto.</Typography>
          </Box>
          </Box>
        </Box>
      </Box>
      <Box component="section" className="container sobreaempresa" sx={{display: 'block', pt: 5, textAlign: 'center', pb: 1, ml:20, mr:20}}>
        <Typography variant="h2">Desde 2023</Typography>
        <Box className="divisor-preto"></Box>
        <Typography variant="p">
          A Sneakers House nasceu em 2023, da vontade de 6 alunos de programação de revolucionar o mercado de calçados.
          <br />A Sneakers House é mais que uma loja, é um conceito.
          <br />Somos apaixonados por conforto e por estilo e temos certeza que o tênis pode estar presente em todas as
          ocasiões. Ousamos incluir os sneakers em todos os momentos do dia e da vida, desde a caminhada, o futebol do
          fim de semana ou profissional, até aquela festa mais arrumadinha.
        </Typography>
      </Box>

      <Box component="section" className="segundaapres" sx={{display: 'flex', flexDirection: 'column', p:5}}>
        <Stack sx={{display: 'flex', backgroundPosition: 'center', justifyContent: 'center', backgroundRepeat: 'no-repeat' }}>
            <Link href="#">
                <img src="/images/Marta.png" alt="Jogadora Martha com a bola no pé, jogando pelo Brasil na Copa do Mundo contra a Itália" width="40%"/>
            </Link>
        </Stack>
        <Box className="container slide" sx={{display: 'flex', flexDirection: 'column', ml: 80}}>
          <Typography variant="p" className="titulo" sx={{mt: -40, fontSize: 50}}>ESTAMOS SEMPRE<br /></Typography>
          <Typography variant="p" sx={{fontSize: 50}}>EM </Typography>
          <Typography className="movimento" sx={{fontSize: 70, color: '#FF4F4F'}}>MOVIMENTO</Typography> 
          <br></br>
          <Typography variant="p" className="subtitulo" sx={{fontSize: 30}}>Do esporte ao dia a dia.</Typography>
        </Box>
      </Box>

      <Box component="section" className="aprenumeros">
        <Box className="container">
          <Typography variant="h2" sx={{display: 'flex', ml: 15, mb: 0, fontSize: 45}}>MAIS DE</Typography>
          <Box className="numeros" sx={{display: 'flex', justifyContent: 'center', pt: 5, pb: 10, ml: 10, mr: 10, columnGap: 15, borderRadius: 15, backgroundColor: '#FF4F4F', color: '#FFF', mt: 3}}>
            <Box>
              <Typography variant="h2" sx={{fontSize: 50}}>20</Typography> tipos de <Typography variant="h3">CHUTEIRAS</Typography>
            </Box>
            <Box>
              <Typography variant="h2" sx={{fontSize: 50}}>33</Typography> tênis de <Typography variant="h3">CANO ALTO</Typography>
            </Box>
            <Box>
              <Typography variant="h2" sx={{fontSize: 50}}>35</Typography> tênis de <Typography variant="h3">CORRIDA</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;