import {Stack, Typography} from '@mui/material'

export default function Header() {
    return (
      <Stack component='header' id='home-information' marginTop={10}
       padding={{xs: ' .5em 2em'}}>
         <Typography variant='h1' fontSize={{xs: '2.5em', lg: '3em'}} marginY={1} maxWidth={225} >
             <span id='green'>Go Green</span> <br/>
         <span id='c-2'> The world of plants</span></Typography>
         <Typography variant='p' maxWidth={{xs: 300, lg: 500}}  fontSize={{xs: '1em'}} marginY={1}>Discover everything you need to know about your plants, 
            treat them with kindness and they will take care of you.</Typography>
         <Typography variant='h2' marginY={1} fontSize={{xs: '1.2em', lg: '1.7em'}} fontWeight='bold'>
           Top 5 of the week
         </Typography>
      </Stack>
    )
}