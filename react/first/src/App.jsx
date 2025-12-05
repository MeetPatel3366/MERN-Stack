import React from 'react'
import Taskone from './Taskone'
import Button from './Button'
import Input from './Input'

const App = () => {
  return (
    <div>
      {/* <Taskone/> */}

      {/* <Button btn="download" bgc="yellow"/>
      <Button btn="Upload" bgc="lightgreen"/>
      <Button btn="Click me" bgc="blue"/> */}

      {/* Task:2  */}
      <Input label='name' inputType="text" placeholder='enter name'/>
      <Input label='email' inputType="email" placeholder='enter email'/>
    </div>
  )
}

export default App
