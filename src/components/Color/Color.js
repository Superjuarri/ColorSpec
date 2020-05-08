import React, { useEffect, useMemo } from 'react'
import { Helmet } from 'react-helmet'

import colorStats from 'color-stats'
import chroma from 'chroma-js'

import { Layout } from '../Layout'

import { Container, ColorContainer, ColorSquare } from './styles'

import { ColorInput } from '../ColorInput'
import { ColorTable } from './ColorTable'
import { ColorRow } from './ColorRow'
// import { ColorBlind } from './ColorBlind'

const ColorContext = React.createContext({ selectedColor: '#fff' })

const Color = ({ history, match }) => {
  const color = useMemo(() => colorStats(match.params.color), [
    match.params.color,
  ])

  useEffect(() => {
    console.log(color)
    console.log(chroma.scale(['yellow', '008ae5']))
    console.log(chroma.scale(['yellow', '008ae5']).colors(12))
  }, [color])

  return (
    <ColorContext.Provider value={{ selectedColor: color.hex }}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Color Spec | {color.hex}</title>
      </Helmet>
      <Layout>
        <Container>
          <ColorInput history={history} defaultColor={color.hex} />

          <ColorContainer>
            <ColorSquare color={color.hex}>
              <h1>
                {color.hex}
                <br />
                <span>{color.closest.name}</span>
              </h1>
            </ColorSquare>
            <ColorTable color={color} />
          </ColorContainer>

          <ColorRow
            name={'Complementary'}
            colors={color.schemes.complementary}
          />
          <ColorRow name={'Analogous'} colors={color.schemes.analogous} />
          <ColorRow
            name={'Split Complementary'}
            colors={color.schemes.splitComplementary}
          />
          <ColorRow name={'Triadic'} colors={color.schemes.triadic} />
          <ColorRow name={'Tetradic'} colors={color.schemes.tetradic} />
          <ColorRow name={'Tints'} colors={color.tints} />
          <ColorRow name={'Shades'} colors={color.shades} />
          <ColorRow name={'Tones'} colors={color.tones} />
          <ColorRow
            name={'Tones'}
            colors={chroma.scale(['white', color.hex, 'black']).colors(11)}
          />

          {/* <ColorBlind color={color} /> */}
        </Container>
      </Layout>
    </ColorContext.Provider>
  )
}

export { Color, ColorContext }
