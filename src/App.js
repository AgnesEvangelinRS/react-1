import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let header ={
      'background-color': '#00ffff',
      'padding': '20px',
      'text-align': 'center'
    };
    let navigation ={
      'background-color': '#7fffd4',
      'padding': '20px',
      'text-align': 'center'
    };
    let column ={
      'float': 'left',
      'width': '30%',
      'background-color': '#ffebcd',
      'border-style': 'solid',
      'padding': '15px'
    };
    let link1={
        'pointer-events' :'none'
    }
    return (
      <div className="App">
          <div className="header" style ={header}>
             <h1>HEADER</h1>
          </div>
          <div className="navigation" style ={navigation} >
              <h2>Navigation Menu</h2>
          </div>
          <div className="row">
            <div className="column" style ={column}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p></div>
            <div className="column" style ={column}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p></div>
            <div className="column" style ={column}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p></div>
          </div>
          <div className="footer" style ={}></div>
      </div>
    );
  }
}

export default App;
