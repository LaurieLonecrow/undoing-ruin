import Link from 'next/link';
import { HeaderBackground} from './HeaderStyles';
import HeaderImage from '../HeaderImage';
import Title from '../Title';
import NavBar from '../NavBar';
import Admin from '../AdminLink';

export default function Header() {
  return (
    <>
    <HeaderBackground>
      <Title color="white" title="Undoing Ruin" href="/"/>
      <Admin/>
      <NavBar />
    </HeaderBackground>
    </>
  );
}