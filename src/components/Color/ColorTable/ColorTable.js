import React from 'react'

// import chroma from 'chroma-js'
// import colorQuantize from 'color-quantize'

import { Wrapper, Table, Title, Value, Code } from './styles'

const ColorTable = ({ color }) => {
  return (
    <Wrapper>
      <Table>
        <tbody>
          <tr>
            <Title>
              <abbr>Hex</abbr> triplet
            </Title>
            <Value>{color.hex.slice(1)}</Value>
            <Code>
              <code>{color.hex}</code>
            </Code>
          </tr>
          <tr>
            <Title>
              <abbr>RGB</abbr> Decimal
            </Title>
            <Value>{color.lib.color.rgbArray.join(', ')}</Value>
            <Code>
              <code>{color.lib.color.rgbString}</code>
            </Code>
          </tr>
          <tr>
            <Title>
              <abbr>RGB</abbr> Percent
            </Title>
            <Value>
              {color.rgbPercent.r}, {color.rgbPercent.g}, {color.rgbPercent.b}
            </Value>
            <Code>
              <code>
                rgb({color.rgbPercent.r}%, {color.rgbPercent.g}%,{' '}
                {color.rgbPercent.b}%)
              </code>
            </Code>
          </tr>
          <tr>
            <Title>
              <abbr>CMYK</abbr>
            </Title>
            <Value colSpan='2'>
              {color.cmyk.c}, {color.cmyk.m}, {color.cmyk.y}, {color.cmyk.k}
            </Value>
          </tr>
          <tr>
            <Title>
              <abbr>HSL</abbr>
            </Title>
            <Value>
              {color.hsl.h}, {color.hsl.s}, {color.hsl.l}
            </Value>
            <Code>
              <code>
                hsl({color.hsl.h}, {color.hsl.s}, {color.hsl.l})
              </code>
            </Code>
          </tr>
          <tr>
            <Title>
              <abbr>HSV</abbr> (or <abbr>HSB</abbr>)
            </Title>
            <Value colSpan='2'>
              {color.hsv.h}, {color.hsv.s}, {color.hsv.v}
            </Value>
          </tr>
          <tr>
            <Title>Web Safe</Title>
            <Value>{color.websafe.slice(1)}</Value>
            <Code>
              <code>{color.websafe}</code>
            </Code>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  )
}

export { ColorTable }
