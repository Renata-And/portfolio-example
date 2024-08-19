import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

const menuItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu items={menuItems} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #c8d5ee;
  display: flex;
  justify-content: space-between;
`