
import {Stack, Button} from '@mui/material'
import Card from '../components/Cards'
import cardData from '../Data/cardData'

export default function Slider() {

  let slider = document.querySelector('#slider-container');
 
  function next() {
    const slidersItems  = document.querySelectorAll('.card');
    slider.appendChild(slidersItems[0])
  }

  function prev() {
    const slidersItems  = document.querySelectorAll('.card');
    slider.prepend(slidersItems[slidersItems.length - 1])
  }
   

    return (
     
      <Stack component='section'  id='slider-container'  position='relative'>
        
        
          <Button id='btn-left'  onClick={() => next()}>L</Button>
          <Button id='btn-right' onClick={() => prev()}>R</Button> 
        
     
            {
            cardData.map((item, index) => {   
                return (
                    <Card title={item.title} description={item.description}
               image={item.image} name={item.name} k={index}  />
                )
            })
          }
          
      </Stack>

          
    )
}