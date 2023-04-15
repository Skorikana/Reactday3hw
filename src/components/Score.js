import React from 'react'

const Score = (props) =>{
  return(
  <div>
  {props.scores.map(marks =>(
    <div className ="date">
      Date:{marks.date} &nbsp; Score:{marks.score}
      </div>
  ))}
  </div>
);
  }
export default Score;


