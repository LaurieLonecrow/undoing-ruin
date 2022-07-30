import styled from "styled-components"

export const NavBarBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const MenuItem = styled.div`
  padding: 10px;
`

export const MenuText = styled.h2`
  color: white;
  font-family: 'Cinzel Decorative', cursive;
  &:hover {
    color: gold;
    opacity: .8;
    cursor: pointer;
    transform: translateY(-2px);

  }
`