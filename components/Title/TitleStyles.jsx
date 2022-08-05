import styled from "styled-components"

export const TitleText = styled.span`
  color: ${props => props.color};
  font-family: 'Oswald', cursive;
  font-size: 3.5rem;
  &:hover {
    color: #5d6f66;
    opacity: .8;
    cursor: pointer;
    transform: translateY(-2px);
  }
    @media screen and (max-width: 768px){
      font-size: 2rem;
    }
`
