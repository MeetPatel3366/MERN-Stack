import React from 'react'
import Car from './Car'

const Garage = () => {
    const cars=["BMW","Volvo","MG","Tata"]
  return (
    <div>
      {cars.map((item)=><Car carName={item}/>)}
    </div>
  )
}

export default Garage
