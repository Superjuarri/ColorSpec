import React, { useState } from 'react'
import chroma from 'chroma-js'

import { ChromePicker } from 'react-color'

import {
  Container,
  ColorDot,
  Input,
  SVGButton,
  Button,
  PopOver,
  Cover,
} from './styles'

const ColorInput = ({ history, defaultColor = chroma.random() }) => {
  const [displayPicker, setDisplayPicker] = useState(false)
  const [color, setColor] = useState(defaultColor)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (chroma.valid(color)) {
      history.push(`/color/${chroma(color).hex().slice(1)}`)
    } else {
      setColor('#000000')
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <ColorDot
        color={color}
        onClick={() => setDisplayPicker((prevState) => !prevState)}
      />

      <Input
        name='color'
        type='text'
        placeholder='Input a color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <SVGButton
        type='button'
        onClick={(e) => {
          e.preventDefault()

          setColor(chroma.random().hex())
        }}
      >
        <svg fill='currentColor' viewBox='0 0 20 20' height='1.25em'>
          <path
            d='M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z'
            clipRule='evenodd'
            fillRule='evenodd'
          ></path>
        </svg>
      </SVGButton>

      <Button type='submit' color={color}>
        Submit
      </Button>

      {displayPicker ? (
        <PopOver displayPicker={displayPicker}>
          <Cover onClick={() => setDisplayPicker(false)} />
          <ChromePicker
            color={color}
            onChange={(newColor) => setColor(newColor.hex)}
            disableAlpha={true}
          />
        </PopOver>
      ) : null}
    </Container>
  )
}

export { ColorInput }
