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


changeHandler = (event, index) =>{
    console.log('Name Change !!!');
    const person1 = { ...this.state.Person[index]};
    person1.name = event.target.value;
    const persons = [...this.state.Person] 
    persons[index] = person1;
    this.setState({
     Person: persons
    });
  
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
      {this.state.Person.map ((person,index) => {return <Person name={person.name} 
                                                                change={(event) => this.changeHandler(event,index)}
                                                                key ={index} />
                                                                ;} )
      
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
