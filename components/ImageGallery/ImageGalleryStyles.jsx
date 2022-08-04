import styled from "styled-components"


export const ImageGrid = styled.div`
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-template-rows: repeat(3, 1fr);
// grid-column-gap: 2rem;
// grid-row-gap: 2rem;
display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: center;


`

export const ImageContainer = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  background: white;
  &:hover {
    transform: scale(1.02);
  }
`

export const ImageCard = styled.div`
  background-image: url(${props => props.url});
  background-position: ${props => props.position};
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  
  
`