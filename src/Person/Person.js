import React, {useState}  from 'react';

const Person = (props) => {

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
    <div>    
    <p>Name {props.name} </p>
    <p>{props.children}</p>
    <button onClick={switchNameHandler}>Click Child </button>
    <p>Internal Property: {personState.Person[0].name}</p>
    </div>
    );
}

export default Person;