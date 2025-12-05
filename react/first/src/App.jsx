import React from 'react'
import Taskone from './Taskone'
import Button from './Button'

const App = () => {
  return (
    <div>
      {/* <Taskone/> */}

      <Button btn="download" bgc="yellow"/>
      <Button btn="Upload" bgc="lightgreen"/>
      <Button btn="Click me" bgc="blue"/>

    </div>
  )
}

export default App
