import styled from "styled-components";

export const TextContent = styled.div`
font-family: 'Josefin Sans', sans-serif;
text-align: left;
padding: 0 40px;
white-space: pre-wrap;
position: absolute;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
width: ${props => props.width};
@media screen and (max-width: 768px) {
  position: relative;
  padding: 20px 20px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  }  
`;

export const TextDecoration = styled.h1`
color: ${props => props.color};
`
