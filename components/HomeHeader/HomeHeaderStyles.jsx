import styled from "styled-components"

export const HiddenContainer = styled.div`
background-color: black;
overflow: hidden;
height: 205px;

`

export const Text = styled.h1`
color: white;
font-family: 'Oswald', cursive;
font-size: 18rem;
transform: translateY(200px);

&:hover {
  cursor: pointer;
  transform: translateY(-200px);
  transition: 1s;
}
`