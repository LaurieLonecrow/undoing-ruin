import styled from "styled-components"
import { Overleaf } from '@styled-icons/simple-icons'

export const Wrapper = styled.span`
  display:flex;
  align-items: baseline;
  &:hover {
    color: #5d6f66;
    opacity: .8;
    cursor: pointer;
    transform: translateY(-2px);
  }
`

export const Leaf = styled(Overleaf)`
  width: 4rem;
  color: #015045;
  margin-left: 1rem;
  @media screen and (max-width: 768px){
    width: 2rem;
  }
`