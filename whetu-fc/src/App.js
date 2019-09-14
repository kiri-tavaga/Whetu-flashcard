import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Reveal, Image} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Whetu Flashcards</h2>
        </div>
        <Grid verticalAlign='middle' centered columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Reveal animated='move right'>
                <Reveal.Content visible>
                  <Image src="images/apple.jpeg" size='small' />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Image src="images/pear.jpeg" size='small' />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
