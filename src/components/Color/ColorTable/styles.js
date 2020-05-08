import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 1;

  overflow-x: auto;
`

export const Table = styled.table`
  width: auto;
  min-width: 100%;

  table-layout: fixed;
  border-collapse: collapse;

  font-size: 12px;

  tbody tr:nth-child(odd) {
    background-color: #f5f6fa;
  }

  tbody tr:nth-child(even) {
    background-color: #fcfdfd;
  }
`

export const Title = styled.th`
  border-radius: 3px 0 0 3px;
  color: #5c5d5f;
  font-weight: 800;
  padding: 1rem;
  text-align: left;
  white-space: nowrap;
  width: 111px;
`

export const Value = styled.td`
  white-space: nowrap;

  font-weight: 400;

  color: #5f6062;
`

export const Code = styled.td`
  code {
    margin-left: 1em;

    border-left: 0.5rem solid #ecedf0;
    font-family: Consolas, menlo, monaco, monospace;

    overflow: hidden;
    padding: 0.75em;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: #5f6062;

    /* opacity: 0.5; */
  }
`
