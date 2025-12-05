import React from 'react'
import Taskone from './Taskone'
import Button from './Button'
import Input from './Input'
import Event from './Event'
import Goal from './Goal'

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

      <Event/>
      
      <Goal isGoal={true}/>
      <Goal isGoal={false}/>
    </div>
  )
}

export default App
