import React from 'react' ;
import Score from "./Score";

const Person =(props) => {
return(
   <div>
    {props.students.map(student =>(
    <div >
      <h2>{student.name}</h2>
      <h5>Bio</h5>
      {student.bio}
      
      <h4>Scores</h4>
      <Score scores ={student.scores} />
     
</div>
 ))}
 </div>
 );
    }
    export default Person;


  
