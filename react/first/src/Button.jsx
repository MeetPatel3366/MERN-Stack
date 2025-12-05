import React from 'react'

const Button = ({btn,bgc}) => {
  return (
    <div>
      <button style={{backgroundColor:bgc}}>{btn}</button>
    </div>
  )
}

export default Button
