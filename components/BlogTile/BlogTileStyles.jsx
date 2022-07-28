import styled from "styled-components"

export const BlogGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 2rem;
grid-row-gap: 2rem;
`

export const BlogCard = styled.div`
  text-align: center;
  padding: 2rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
  background: white;
  &:hover {
    transform: scale(1.02);
  }
`
