import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from 'semantic-ui-react'
import Flash from './Flash'
import Pear from './Pear';

class App extends Component {
  render() {
    return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Whetu Flashcards</h2>
        </div>
        <div>
        <Grid verticalAlign='middle' centered columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Flash />
            </Grid.Column>
            <Grid.Column>
              <Pear />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
