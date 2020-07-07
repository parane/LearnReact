import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App  extends Component {

  state = {
    Person :[
      {name:'Para',age:12},
      {name:'Parane2',age:12},
      {name:'Parane3',age:12}
    ],
    OtherState:'anytho'
  };

  switchNameHandler = () =>{
    console.log('Button Clicked !!!');
    this.setState({
      Person :[
      {name:'Paraneetharan',age:12},
      {name:'Parane2',age:12},
      {name:'Parane3',age:12}
    ]
    });
  }


  render(){
 return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={this.switchNameHandler}>Click Me </button>
      <Person name={this.state.Person[0].name}/>
    </div>
  ); 

 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello'));
  }

}

export default App;
