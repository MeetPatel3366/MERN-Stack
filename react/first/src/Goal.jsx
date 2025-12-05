import React from 'react'

const Goal = ({isGoal}) => {
  return (
    <div>
      {isGoal? <h2>Yes</h2>: <h2>No</h2>}
    </div>
  )
}

export default Goal
