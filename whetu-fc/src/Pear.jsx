import React from 'react'
import { Reveal, Image } from 'semantic-ui-react'

const Pear = () => (
  <div>
  <Reveal animated='rotate'>
    <Reveal.Content visible>
        <Image circular size='small' src='./images/pear.jpeg' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <br></br>
      <h2>Pear</h2>
    </Reveal.Content>
  </Reveal>
  </div>
)

export default Pear