import React from 'react'
import Taskone from './Taskone'
import Button from './Button'
import Input from './Input'
import Event from './Event'
import Goal from './Goal'
import Product from './Product'
import Garage from './Garage'
import FavColor from './hooks/useState/FavColor'

const App = () => {
  return (
    <div>
      {/* <Taskone/> */}

      {/* <Button btn="download" bgc="yellow"/>
      <Button btn="Upload" bgc="lightgreen"/>
      <Button btn="Click me" bgc="blue"/> */}

      {/* Task:2  */}
      {/* <Input label='name' inputType="text" placeholder='enter name'/>
      <Input label='email' inputType="email" placeholder='enter email'/> */}

      {/* <Event/>
      
      <Goal isGoal={true}/>
      <Goal isGoal={false}/> */}

        {/* task  */}
      {/* <h2>products</h2>
      <Product title="iPhone 17" price={79999} availability={true} />
      <Product title="redmi 16" price={80000} availability={false} />
      <Product title="realme" price={50000} availability={true} /> */}

      {/* <Garage/> */}

      <FavColor/>
    </div>
  )
}

export default App
