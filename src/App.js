import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

/**
 * Pada class dengan extends Componen kita dapat menggunakan state
 */
class App extends Component {
  state = {       // membuat state dengan nilai js object
    persons : [   // dalam state buat array persons property
        { name: 'Max', age: 28 },  // array of js object
        { name: 'Billy', age: 30 },
        { name: 'Yudie', age: 33 },
        { name: 'Yefta', age: 29 }
    ],
    otherState: 'Some other value'
  }

  swicthClickHandler = (newName) => {  // Handle Button onClick
    console.log('Was Clicked!');
    this.setState ({
      persons: [
        { name: newName, age: 29 },  // array of js object
        { name: 'Billy Pesoth', age: 30 },
        { name: 'Yudie Firmansyah', age: 33 },
        { name: 'Yefta', age: 29 }
      ]
    })
  }

  nameChangeHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },  // array of js object
        { name: e.target.value, age: 30 },
        { name: 'Yudie Firmansyah', age: 33 },
        { name: 'Yefta', age: 29 }
      ]
    })
  }

  render() { //render something to screen
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick = {this.swicthClickHandler.bind(this, 'Maximilian!!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.swicthClickHandler.bind(this, 'Max!!!')} 
                changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} 
                age={this.state.persons[3].age}>My Hobbies is Singing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'Hi, I\'m React App !!!.'));
  }
}

export default App;
