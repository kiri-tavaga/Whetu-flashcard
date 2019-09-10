import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const FCQuestion = (props) => (
  <Card>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.Answers}</Card.Header>
    </Card.Content>
  </Card>
)

export default FCQuestion
