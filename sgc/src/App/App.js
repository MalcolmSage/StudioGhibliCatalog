import './App.css';
import React, { Component } from "react";
import Films from '../Films/Films'

class App extends Component {
  constructor(){
    super()
    this.state = {
      films: [],
      currentFilm: 2
    }
  }

  componentDidMount(){
    const url = "https://ghibliapi.herokuapp.com/films/"
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({films: data})
    })
  }
  moveRight = () =>{
    let newCount = this.state.currentFilm + 1;
    if (newCount > 20) {
      newCount = 0;
    }
    this.setState({
      currentFilm: newCount
    })
  }
  moveLeft = () =>{
    //Ternary Operator => some Condition ? desiredValue : defaultValue
    let newCount = this.state.currentFilm - 1;
    if (newCount < 0) {
      newCount = 20;
    }
    this.setState({
      currentFilm: newCount
    })


}
  render() {
    let allFilms = [];
    for (let i=0; i<this.state.films.length; i++){
      let newFilmObject = this.state.films[i];
      allFilms.push(<Films key={newFilmObject.id} film={newFilmObject}/>)
    }
    return (
      <div className="App">
        <h1>Studio Ghibli Films</h1>
        <main className="slide">
          <button onClick={this.moveLeft}>&#171;</button>
          {allFilms[this.state.currentFilm]}
          <button onClick={this.moveRight}>&#187;</button>
        </main>
      </div>
      
    );
  }
}

export default App;
