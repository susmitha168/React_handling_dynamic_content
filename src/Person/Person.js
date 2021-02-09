import React from 'react';
import './Person.css';

const person = (props) => {
   // return <p>Hi,I am a Person.I am {Math.floor(Math.random() * 30)}!!</p>
   //return <p>I am {props.name}.I am {props.age} years old.</p>
   return(
       <div className='Person'>
           <p onClick={props.click}>I am {props.name}.I am {props.age} years old.</p>
           <p>{props.children}.</p>
           <input type="text" onChange={props.changed} />
       </div>
   )
};

export default person;