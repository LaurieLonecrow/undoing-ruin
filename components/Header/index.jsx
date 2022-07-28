import Link from 'next/link';
import { HeaderBackground } from './HeaderStyles';
import Title from '../Title';
import NavBar from '../NavBar';
import Admin from '../AdminLink';

export default function Header() {
  return (
    <>
    <HeaderBackground>
      <Link href='/'>
      <Title color="white" title="Undoing Ruin"/>
      </Link>
      <Admin/>
      <NavBar />
    </HeaderBackground>
    </>
  );
}