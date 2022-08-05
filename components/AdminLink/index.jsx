import { AdminLink } from "./AdminStyles"
import { MenuItem, MenuText } from "../NavBar/NavBarStyles";
import Link from 'next/link';

export default function Admin() {
  return (
    <>
  <AdminLink>
    <Link href='/login'>
      <MenuItem>
      <MenuText>admin</MenuText>
      </MenuItem>
    </Link>
  </AdminLink> 
    </>
  );
}