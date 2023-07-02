import React from 'react'
import { FaStar } from 'react-icons/fa'


//note you can also set 

//{props.openSpots === 0 && 


function Card(props) {
  let badgetText 
  if (props.openSpots === 0) {
    badgetText = 'SOLD OUT'
  } else if (props.location === 'Online'){
    badgetText = 'ONLINE'
 } 
  

  return (
 <div className='card'>
{badgetText &&  <div className='card-badge'> {badgetText}</div>}
<img src={props.img} className='card-image' />
<div className='card-stats'>
<span>{props.Imgicon}</span>
<FaStar  color='red'/>
<span>{props.rating}</span>
<span className='gray'>({props.reviewCount}) </span>
<span className='gray'>{props.country}</span>
</div>
<p>{props.title}</p>
<p><span className='bold'>from ${props.price}</span> / person</p>

</div>
  )
}

export default Card