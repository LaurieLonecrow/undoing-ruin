import styled from "styled-components"

export const HeaderImageContainer = styled.div`
background-attachment: fixed;
background-image: url(${props => props.url});
background-position: ${props => props.position};
background-size: cover;
background-repeat: no-repeat;
position: relative;
width: 100vw;
height: 100vh;
box-shadow: ${props => props.edge};
filter: ${props => props.gray};
@media screen and (max-width: 768px) {
  position: relative;
  width: 100%;
  box-shadow: none;
  background-size: 800px;
  background-attachment: scroll;

  } 
`
export const Image = styled.img`

`