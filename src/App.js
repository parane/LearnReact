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

  switchNameHandler = (newName) =>{
    console.log('Button Clicked !!!');
    this.setState({
      Person :[
      {name:newName,age:12},
      {name:'Parane2',age:12},
      {name:'Parane3',age:12}
    ]
    });
  }

nameChangeHandler = (event) => {
this.setState({
      Person :[
      {name:event.target.value,age:12},
      {name:'Parane2',age:12},
      {name:'Parane3',age:12}
    ]
    });
}

 render(){
 return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={this.switchNameHandler.bind(this,'Bind')}>Click Bind </button>
      <button onClick={() => this.switchNameHandler('Fun')}>Click Fun </button>
      <Person name={this.state.Person[0].name} changed ={this.nameChangeHandler}/>
    </div>
  ); 

 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello'));
  }

}

export default App;
