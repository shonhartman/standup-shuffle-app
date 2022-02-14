import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Developer from './components/Developer';
import AddDeveloperForm from './components/AddDeveloperForm';

class App extends Component {

  state = {
    developers: [
      {
        name: "Jonathan",
        id: 1
      },
      {
        name: "Jereme",
        id: 2
      },
      {
        name: "JPG",
        id: 3
      },
      {
        name: "Reehana",
        id: 4
      }
    ]
  };

  handleRemoveDeveloper = (id) => {
    this.setState( prevState => {
      return {
        developers: prevState.developers.filter( p => p.id !== id)
      }
    })
  };

  // developers id counter
  prevDeveloperId = 4;

  handleAddDeveloper = (name) => {
    this.setState(prevState => {
      return {
        developers: [
          ...prevState.developers,
          {
            name,
            score: 0,
            id: this.prevDeveloperId += 1
          }
        ]
      }
    })
  };

  shuffleDevs = () => {
    this.setState(prevState => {
      let currentIndex = prevState.developers.length,  randomIndex;

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
      
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [prevState.developers[currentIndex], prevState.developers[randomIndex]] = [
          prevState.developers[randomIndex], prevState.developers[currentIndex]];
      }

      return {
        developers: prevState.developers 
      }
    })
  }

  render() {
    return (
      <div className="board">
        <Header 
          title="Standup Shuffle" 
          developers={this.state.developers} 
          shuffleDevs={this.shuffleDevs}
        />
        {/* DEVELOPER LIST */}
        {this.state.developers.map( (developer, index) => 
          <Developer 
            key={developer.name} 
            id={developer.id}
            name={developer.name} 
            index={index}
            removeDeveloper={this.handleRemoveDeveloper} 
          /> 
          )}
          <AddDeveloperForm addDeveloper={this.handleAddDeveloper} />
      </div>
    );
  }
}

export default App;
