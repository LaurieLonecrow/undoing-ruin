import styled from "styled-components"
import { MenuAlt3 } from "@styled-icons/heroicons-solid"

export const MenuButton = styled.button`
border: none;
`
export const ModalIcon = styled(MenuAlt3)`
  background: #F3F3E3;
  color: #015045;
  width: 3rem;
  &:hover {
    color: #5d6f66;
    cursor: pointer;
    transform: translateY(-2px);
  }
`
export const HeaderBackground = styled.div`
  background: #F3F3E3;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100vw;
  height: fit-content;
  padding: 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
`
