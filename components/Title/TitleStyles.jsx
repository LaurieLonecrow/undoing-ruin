import styled from "styled-components"

export const TitleText = styled.span`
  color: ${props => props.color};
  font-family: 'Koulen', cursive;
  font-size: 3.5rem;
  &:hover {
    color: gold;
    opacity: .8;
    cursor: pointer;
    transform: translateY(-2px);
`
