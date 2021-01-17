import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Form />
        <Card />
      </div>
    )
  }
}

export default App;
