import Link from 'next/link';
import { Leaf, HeaderBackground} from './HeaderStyles';
import Title from '../Title';
import NavBar from '../NavBar';
import Admin from '../AdminLink';
import HomeHeader from '../HomeHeader';

export default function Header() {
  return (
    <>
    <HeaderBackground>
      <HomeHeader/>
      <NavBar />
      <Admin/>
    </HeaderBackground>
    </>
  );
}