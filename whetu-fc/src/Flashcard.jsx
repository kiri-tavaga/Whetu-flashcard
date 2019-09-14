import React, {Component} from 'react'
import FCQuestion from './FCQuestion'
import fc from './fc'

import {Button, Reveal, Grid} from 'semantic-ui-react'

export default class Flashcard extends Component {
  constructor (props) {
    super(props)

    this.state={
      fc: fc.cards,
      currentCard: {}
    }
  }
  componentDidMount () {
    const currentCards=this.state.cards
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard (currentCards) {
    let card=currentCards[Math.floor(Math.random() * currentCards.length)]
    return card
  }

  clickHandler=event => {
    const currentCards=this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render () {
    return (
      <div>
        <p align='center'>Click on the question to reveal the answer</p>
        <Grid verticalAlign='middle' centered columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Reveal animated='small fade'>
                <Reveal.Content visible>
                  <FCQuestion image={this.state.image} />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <FCQuestion answer={this.state.answer} />
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Button onClick={this.clickHandler}>Next Card</Button>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
