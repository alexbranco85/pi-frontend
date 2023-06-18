import React from 'react';
import { useTheme, Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
       <Box component="section" className="quem-somos">
        <Box className="slide slide_01">
          <Box className="container">
          <Stack sx={{ backgroundPosition: 'center', justifyContent: 'center' }}>
            <Link href="#">
                <img src="/images/banner-quem-somos.png" alt="Banner Quem Somos" width="100%" style={{ margin: '0 auto', display: 'block' }} />
            </Link>
          </Stack>
          <Typography variant="p" className="titulo" sx={{ fontSize: '50px', paddingTop: '300px'}}>NÓS SOMOS A SNEAKERS HOUSE</Typography>
            <Typography variant="p" className="subtitulo">Somos ousados, corajosos, apaixonados por estilo e conforto.</Typography>
          </Box>
        </Box>
      </Box>
      <Box component="section" className="container sobreaempresa">
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
      <Box component="section" className="segundaapres">
        <Box className="container slide">
          <Typography variant="p" className="titulo">
            ESTAMOS SEMPRE<br /> EM <span className="movimento">MOVIMENTO</span>
          </Typography>
          <Typography variant="p" className="subtitulo">Do esporte ao dia a dia.</Typography>
        </Box>
      </Box>
      <Box component="section" className="aprenumeros">
        <Box className="container">
          <Typography variant="h2">MAIS DE</Typography>
          <Box className="numeros">
            <Box>
              <Typography variant="h2">20</Typography> tipos de <Typography variant="h3">CHUTEIRAS</Typography>
            </Box>
            <Box>
              <Typography variant="h2">33</Typography> tênis de <Typography variant="h3">CANO ALTO</Typography>
            </Box>
            <Box>
              <Typography variant="h2">35</Typography> tênis de <Typography variant="h3">CORRIDA</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;