import styled from "styled-components"

export const NavRow = styled.div`
  display: inline-block;
`
export const NavBarBar = styled.span`
  display: flex;
  justify-content: center;
`

export const MenuItem = styled.div`
  padding: 10px;
`

export const MenuText = styled.h2`
  color: #015045;
  font-family: 'Josefin Sans', cursive;
  &:hover {
    color: #5d6f66;
    cursor: pointer;
    transform: translateY(-2px);

  }
  @media screen and (max-width: 768px){
    font-size: 2rem;
}
`