import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
  return (

    <Box component="section" className="quem-somos" sx={{display: 'block'}}>
       <Box className="slide slide_01" sx={{ position: 'relative' }}>
  <Box className="container">
    <Stack sx={{ backgroundPosition: 'center', justifyContent: 'center', backgroundRepeat: 'no-repeat' }}>
      <Link href="#">
        <img src="/images/banner-quem-somos.png" alt="Banner Quem Somos" width="100%" style={{ margin: '0 auto', display: 'block' }} />
      </Link>
    </Stack>
  </Box>

  <Box className="box-text" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'left', ml: -35 }}>
    <Typography variant="p" className="titulo" sx={{ fontSize: '45px' }}>
      NÓS SOMOS A SNEAKERS HOUSE
    </Typography>
    <br></br>
    <Typography variant="p" className="subtitulo" sx={{ fontSize: '24px' }}>
      Somos ousados, corajosos, apaixonados por estilo e conforto.
    </Typography>
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


        
        <Grid container justifyContent="center" alignItems="center" spacing={2} marginBottom={10}>
            <Grid item xs={12} sm={6}>
                <Stack
                sx={{
                    backgroundPosition: 'center',
                    justifyContent: 'flex-end',
                    backgroundRepeat: 'no-repeat',
                    pr: { xs: 0, sm: 2 },
                    textAlign: { xs: 'center', sm: 'left' },
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }}
                >
                <Box sx={{ width: '80%' }}>
                    <Link href="#">
                    <img src="/images/Marta.png" alt="Jogadora Marta com a bola no pé, jogando pelo Brasil na Copa do Mundo contra a Itália" style={{ width: '100%' }} />
                    </Link>
                </Box>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: { xs: 4, sm: 0 }, ml: 5 }}>
                    <Typography variant="p" className="titulo" sx={{ fontSize: { xs: '20px', sm: '50px' } }}>
                        ESTAMOS SEMPRE EM<br />
                    </Typography>
                    <Typography className="movimento" sx={{ fontSize: { xs: 30, sm: 70 }, color: '#FF4F4F' }}>
                        MOVIMENTO
                    </Typography>
                    <br />
                    <Typography variant="p" className="subtitulo" sx={{ fontSize: { xs: 20, sm: 30 } }}>
                        Do esporte ao dia a dia.
                    </Typography>
                </Box>
            </Grid>
        </Grid>

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
    </Box>


  )
}

export default About;