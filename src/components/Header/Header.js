import React from 'react'
import { StyledHeader, NavBar, MenuButton, Title, Button } from './HeaderStyles'

function Header() {
  return (
    <StyledHeader>
      <NavBar>
        {/* <MenuButton> 
          <div></div>
          <div></div>
          <div></div>
        </MenuButton> */}
        <Title><span>S</span>naps</Title>
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </NavBar>
    </StyledHeader>
  )
}

export default Header