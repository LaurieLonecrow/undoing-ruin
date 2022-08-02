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
  // background-attachment: scroll;

  body:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background: url(photos/2452.jpg) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  } 
`
export const Image = styled.img`

`