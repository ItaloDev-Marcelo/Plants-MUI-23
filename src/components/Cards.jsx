import {Stack, Typography,Link} from '@mui/material'

const Card = ({title, description, image,name,k}) => {
    return (
      <Stack component='article' className={name}  key={k}>
        <Stack component='header'>
        <Stack className='image-container'>
          <img src={image} alt={title}/>
        </Stack>
        <Typography variant='h3' fontSize={{xs: '1.2em'}} padding={2}> <strong>{title}</strong> </Typography>
        </Stack>
         
        <Stack className='information' padding={2}>
        <Typography variant='p' > {description}</Typography> <br />
         <Link  href="#" underline="always"> Know more &gt; </Link>
        </Stack>
      </Stack>
    )
}

export default Card;