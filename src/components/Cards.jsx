import {Stack, Typography,Link} from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Card = ({title, description, image,name,k}) => {
    return (
      <Stack component='article' className={name}  key={k}>
        <Stack component='header'>
        <Stack className='image-container'>
          <img src={image} alt={title}/>
        </Stack>
        <Typography variant='h3' fontSize={{xs: '1.2em'}} padding={2}> {title} </Typography>
        </Stack>
         
        <Stack className='information' padding={2}>
        <Typography variant='p' > {description}</Typography>
         <Link  href="#" underline="always"> Know more <img src={KeyboardArrowLeftIcon} alt=''/>  </Link>
        </Stack>
      </Stack>
    )
}

export default Card;