import React from 'react'
import { Reveal, Image } from 'semantic-ui-react'

const Apple = () => (
  <div>
  <Reveal animated='rotate'>
    <Reveal.Content visible>
        <Image circular size='small' src='./images/apple.jpeg' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <br></br>
      <h2>Apple</h2>
    </Reveal.Content>
  </Reveal>
  </div>
)

export default Apple