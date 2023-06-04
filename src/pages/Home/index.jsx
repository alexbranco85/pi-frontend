import React from "react";
import SliderHome from "../../components/SliderHome";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { BarChartRounded, CreditCard, LocalShipping, LocationOn, Percent } from "@mui/icons-material";

const Home = () => {
    const theme = useTheme();
    return (
        <>
            <SliderHome />
            <Box sx={{ ...theme.bgRosa, ...theme.boxPages }}>
                <Stack container sx={{ ...theme.container, }} direction='row' justifyContent='space-between'>
                    <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, px: 3, py: 2}}>
                        <Typography color='white' sx={{display: 'flex'}}><LocalShipping sx={{ mr:1 }} />Frete Rápido e Seguro</Typography>
                    </Stack>
                    <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, p: 2}}>
                        <Typography color='white' sx={{display: 'flex'}}><CreditCard sx={{ mr:1 }} />Parcele em até 10x sem juros</Typography>
                    </Stack>
                    <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, p: 2}}>
                        <Typography color='white' sx={{display: 'flex'}}><LocationOn sx={{ mr:1 }} />Entregamos em todo Brasil</Typography>
                    </Stack>
                    <Stack item md={3} sx={{ border: '1px solid #fff', borderRadius: 3, p: 2}}>
                        <Typography color='white' sx={{display: 'flex'}}><Percent sx={{ mr:1 }} />Desconto de 5% no boleto</Typography>
                    </Stack>
                </Stack>

            </Box>
        </>
    )
}

export default Home