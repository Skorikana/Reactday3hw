import React from 'react'

const Score = (props) =>{
  return(
  <div>
      <div className ="date">
      Date:{props.date} &nbsp; Score:{props.score}
      </div>
    </div>
);
  }
export default Score;


