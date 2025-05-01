
import {Stack, Button} from '@mui/material'
import Card from '../components/Cards'
import cardData from '../Data/cardData'
import { useRef } from 'react';

export default function Slider() {

  const  sliderRef = useRef(null) ;

  function next() {
    const slider = sliderRef.current;
    const items  = slider.querySelectorAll('.card');
    if (items.length > 0 ) {
    slider.appendChild(items[0])
    }
  }

  function prev() {
    const slider = sliderRef.current;
    const items  = slider.querySelectorAll('.card');
    if (items.length > 0 ) {
    slider.prepend(items[items.length - 1])
    }
  }
   

    return (
     
      <Stack component='section'  id='slider-container' ref={sliderRef}  position='relative'>
        
        
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