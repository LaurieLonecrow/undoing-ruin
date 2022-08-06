
import { NavRow, NavBarBar, MenuItem, MenuText } from './NavBarStyles';
import Link from 'next/link';
import { menuItems } from '../../constants/content';

export default function NavBar() {
  

  return (
    <>
    <NavRow>
    <NavBarBar>
    {menuItems.map((item, index) => (
      <Link key={index} href={`/${item.replace(/\s/g, "").toLowerCase()}`}>
      <MenuItem>
        <MenuText>{item}</MenuText>
      </MenuItem>
      </Link>
    ))}
    </NavBarBar>
    </NavRow>

    </>
  );
}