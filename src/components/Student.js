import React from 'react' ;
import Score from "./Score";
const Person =({name, bio, scores }) => {
return(
   <div>
        <div >
      <h2>{name}</h2>
      <h5>Bio</h5>
      {bio}
      <h4>Scores</h4>
      {scores.map((scores) => <Score date ={scores.date} scores= {scores.scores}/> )}    
</div>

 </div>
 );
    }
    export default Person;


  
