import React, { useContext } from 'react'
import { ColorContext } from '../Color'

import { Wrapper, Row, Square } from './styles'

const ColorRow = ({ name, colors }) => {
  const { selectedColor } = useContext(ColorContext)

  return (
    <Wrapper>
      <Row>
        {colors.map((color, i) => (
          <ColorSquare
            key={i}
            color={color}
            // react-router-dom Link component does not accept
            // boolean data or capitals in prop names
            selectedcolor={selectedColor === color ? 'true' : 'false'}
          />
        ))}
      </Row>
      <strong>{name}</strong>
    </Wrapper>
  )
}

const ColorSquare = ({ color, selectedcolor }) => {
  return (
    <Square to={color.slice(1)} color={color} selectedcolor={selectedcolor}>
      {color}
    </Square>
  )
}

export { ColorRow }
