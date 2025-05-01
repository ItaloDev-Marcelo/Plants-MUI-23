import {Stack, Typography} from '@mui/material'

export default function Header() {
    return (
      <Stack component='header' id='home-information' padding={{xs: '2em'}}>
         <Typography variant='h1' fontSize={{xs: '2em'}} marginY={1} maxWidth={300} > <span id='green'>Go Green</span> <br/>
         <span id='c-2'> The world of plants</span></Typography>
         <Typography variant='p' maxWidth={300}  fontSize={{xs: '.7em'}} marginY={1}>Discover everything you need to know about your plants, 
            treat them with kindness and they will take care of you.</Typography>
         <Typography variant='h2' fontSize={{xs: '1.2em'}}>Top 5 of the week
         </Typography>
      </Stack>
    )
}