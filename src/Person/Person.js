import React, {useState}  from 'react';
import './Person.css';

const Person = (props) => {

  const style = {
    backgroundColor : 'white'
  }

  const [personState, setPersonState] =  useState({
      Person :[
      {name:'Para',age:12},
      {name:'Parane2',age:12},
      {name:'Parane3',age:12}
    ]
  });

  const switchNameHandler = () =>{
    console.log('Button Clicked !!!');
    
    setPersonState({
         Person :[
      {name:'Sara',age:12},
      {name:'Sara2',age:12},
      {name:'Sara3',age:12}
    ]
    });
  }

    return  (
    <div className="Person">    
    <p>Name {props.name} </p>
    <p>{props.children}</p>
    <button style={style} onClick={switchNameHandler}>Click Child </button>
    <p>Internal Property: {personState.Person[0].name}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default Person;