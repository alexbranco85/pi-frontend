import { Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel'

const SliderHome = () => {
  const theme = useTheme();

  var items = ['./images/banner_01.png', './images/banner_02.png']

  return (
    <Carousel indicators navButtonsAlwaysVisible sx={{ height: '560px', width: '100%' }}>
      {items.map((item, index) => (
        <>
          <Paper key={index} sx={{ backgroundImage: `url(${ item })`, ...theme.slider }} />
        </>
      ))}

    </Carousel>
  )
}

export default SliderHome