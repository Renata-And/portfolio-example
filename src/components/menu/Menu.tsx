import React from 'react'
import styled from 'styled-components'

export const Menu = (props: { items: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          )
        })}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`
