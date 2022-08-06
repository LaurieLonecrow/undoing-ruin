import Link from 'next/link';
import { ModalWrapper, Close, CloseButton} from './ModalMenuStyles';
import { MenuItem, MenuText } from '../NavBar/NavBarStyles';
import { menuItems } from '../../constants/content';

export default function ModalMenu({onClick, animation, display}) {
  
  return (
    <>
    <ModalWrapper animation={animation} display={display}>
      <CloseButton onClick={onClick} ><Close/></CloseButton>
    {menuItems.map((item, index) => (
      <Link key={index} href={`/${item.replace(/\s/g, "").toLowerCase()}`}>
      <MenuItem onClick={onClick}>
        <MenuText>{item}</MenuText>
      </MenuItem>
      </Link>
    ))}
    </ModalWrapper>
    </>
  );
}