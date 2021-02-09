import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons :[
      { name:'Max', age: '23'},
      { name:'Manu', age: '24'},
      { name: 'Stephana', age: '43'},
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!!');
    //DONT DO THIS - this will not modify the state --> this.state.persons[0].name = 'Maximilian';
   this.setState({
      persons : [
        { name: newName, age: '23'},
        { name:'Manu', age: '24'},
        { name: 'Stephana', age: '50'}
      ]
    } )
  }

  nameEventHandler = (event) =>{
    this.setState({  
          persons : [
            { name: 'Oye', age: '20'},
            { name: event.target.value, age: '24'},
            { name: 'Stephana', age: '20'}
          ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }
  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'happy')}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
            changed={this.nameEventHandler}> Hobbies: Reading Books</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      )
    }
    return (
      <div className="App">
       <h1>Hi I'm a first react project</h1>
       <p>This is really working!!!</p>
       <button 
       style={style}
       onClick={this.togglePersonHandler}>Toggle Persons</button>
       {persons}
      </div>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hello world!!'));
  }
}

export default App;
