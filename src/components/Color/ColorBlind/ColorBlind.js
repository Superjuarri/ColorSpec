import React from 'react'

import { Container, BlindnessContainer, BlindnessSquare } from './styles'

const ColorBlind = ({ color }) => {
  return (
    <Container>
      <BlindnessContainer>
        <BlindnessSquare
          name={'Achromatopsia'}
          color={color.blind.achromatopsia}
        />
        <BlindnessSquare
          name={'Achromatomaly'}
          color={color.blind.achromatomaly}
        ></BlindnessSquare>
      </BlindnessContainer>

      <BlindnessContainer>
        <BlindnessSquare name={'Protanopia'} color={color.blind.protanopia} />
        <BlindnessSquare
          name={'Deuteranopia'}
          color={color.blind.deuteranopia}
        />
        <BlindnessSquare name={'Tritanopia'} color={color.blind.tritanopia} />
      </BlindnessContainer>

      <BlindnessContainer>
        <BlindnessSquare name={'Protanomaly'} color={color.blind.protanomaly} />
        <BlindnessSquare
          name={'Deuteranomaly'}
          color={color.blind.deuteranomaly}
        />
        <BlindnessSquare name={'Tritanomaly'} color={color.blind.tritanomaly} />
      </BlindnessContainer>
    </Container>
  )
}

export { ColorBlind }
