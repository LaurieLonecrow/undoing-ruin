import styled, { css, keyframes } from 'styled-components'
import { X } from '@styled-icons/heroicons-solid';

const slideHidden = keyframes`
from {
  transform: translateX(0px);
}
to {
  transform: translateX(-200px);
}
`;

const slideVisible = keyframes`
from {
    transform: translateX(-200px);

}
to {
    transform: translateX(0px);

}
`;

export const ModalWrapper = styled.div`
position: fixed;
display: flex;
flex-direction: column;
top: 0;
left: 0;
width: 200px;
height: 100vh;
background-color: #fff;
border-radius: 8px;
z-index: 100;
padding: 48px 0;
cursor: default;
overflow-x: hidden;
animation: ${props => props.animation ? css`${slideVisible} .5s linear forwards;`: css`${slideHidden} .5s linear forwards;`};
`

export const Close = styled(X)`
width: 4rem;
color: #015045;
@media screen and (max-width: 768px){
  width: 2.5rem;
}
`

export const CloseButton = styled.button`
background: transparent;
border: solid 1px #015045;
border-radius: 50%;
padding: 8px;
top: 5px;
right: 5px;
position: absolute;
&:hover {
  color: #5d6f66;
  cursor: pointer;
  transform: translateY(-2px);
}
`
