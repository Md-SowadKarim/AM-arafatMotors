import React from 'react'
import image from "../../assets/image/signal2.png"
import Tittle from '../../components/shared/tittle/Tittle'
const Learn1 = () => {
  return (
     <div className='text-center p-2'>
      <Tittle first="Learn Traffic" second="Signs" thired="Knowing Signals Is Important While Driving..."/>
          <img className='mx-auto' src={image} alt="" />
        </div>
  )
}

export default Learn1
