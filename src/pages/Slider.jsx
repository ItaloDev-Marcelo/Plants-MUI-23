
import {Stack} from '@mui/material'
import Card from '../components/Cards'
import cardData from '../Data/cardData'

export default function Slider() {

  let slider = document.querySelector('#slider-container');
 
  let next = () => {
    let slidersItems  = document.querySelectorAll('.card');
    slider.appendChild(slidersItems[0])
  }

  let prev = () => {
    let slidersItems  = document.querySelectorAll('.card');
    slider.prepend(slidersItems[slidersItems.length - 1])
  }
   

    return (
     
      <Stack component='section'  id='slider-container'  position='relative'>
        
        
        <button id='btn-left'  onClick={() => next()}>L</button>
          <button id='btn-right' onClick={() => prev()}>R</button> 
        
     
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