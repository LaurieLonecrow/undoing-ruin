import { NavRow, NavBarBar, MenuItem, MenuText } from './NavBarStyles'
import Link from 'next/link';

export default function NavBar() {
  const menuItems = [
    'about us',
    'blog',
    'contact us',
  ];
  return (
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
  );
}