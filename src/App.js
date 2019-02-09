import React, { Component } from 'react';
// import logo from './logo.svg';

// import MyInfo from './components/MyInfo';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import TodoItem from './components/TodoItem';
// import ContactCard from './components/ContactCard';
// import Joke from './components/Joke';
// import Product from './components/Product';

// import products from "./constants/vschoolProducts";
// import todosData from './constants/todosData';

import './App.css';

// const todoComponents = todosData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)

class App extends Component {

  render() {
    // const date = new Date();
    return (
      <div>
            <Header username="Bill" />
            <Greeting />
        </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}


class Greeting extends Component {

  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    );
  }
}

export default App;
