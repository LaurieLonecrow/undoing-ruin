import styled from "styled-components";

export const Text = styled.h1`
font-family: 'Josefin Sans', sans-serif;
text-align: left;
padding: 0 40px 40px;
white-space: pre-wrap;
`

export const TileContainer = styled.div`
background-image: url(${props => props.url});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 400px;
padding: 40px 0 0;
width: 50%;
position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;

  }

` 

export const TileButton = styled.button`
position: absolute;
bottom: 0;
width: 100%;
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(#3e842f, #3e843f);
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-family: expo-brand-demi,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 2rem;
  height: 82px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 32px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
 

&:hover {
  box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
  opacity: .85;
}

&:active {
  outline: 0;
}
&:focus {
  box-shadow: rgba(0, 0, 0, .5) 0 0 0 3px;
}
@media screen and (max-width: 768px){
    height: 48px;
}
`