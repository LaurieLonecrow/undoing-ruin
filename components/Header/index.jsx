import { HeaderBackground} from './HeaderStyles';
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