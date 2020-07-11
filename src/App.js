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
    OtherState:'anytho',
    showPerson: true
  };

  showMeHandler = () =>{
    console.log('Button Clicked !!!');
    const isShow = this.state.showPerson;
    this.setState({
      showPerson: !isShow
    })
  }


 deleteHandler = (index) => {
       console.log('Button Clicked !!!');
       const persons = this.state.Person;
       persons.splice(index,1);
       this.setState({
         Person : persons
       });

 }


 render(){
 
 let person = null;
 if(this.state.showPerson){
   person  = (<div>
      {this.state.Person.map (person => {return <Person name={person.name} click={this.deleteHandler}/>;} )
      
      }
   </div>); 
 }

 return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={this.showMeHandler}>Show me</button>
      {person}
    </div>
  ); 

 // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello'));
  }

}

export default App;
