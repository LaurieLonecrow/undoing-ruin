import { useState, useEffect } from 'react';
import ModalMenu from '../ModalMenu';
import { HeaderBackground, MenuButton, ModalIcon} from './HeaderStyles';
import NavBar from '../NavBar';
import Admin from '../AdminLink';
import HomeHeader from '../HomeHeader';

export default function Header() {
  const [showModal, setShowModal] = useState();
  const [media, setMedia] = useState(false);

  useEffect(() => {
    function handleResize() {
       return window.innerWidth > 760 ? setMedia(true) : setMedia(false);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    function show() {
      setShowModal(!showModal)
    }

  return (
    <>
    <HeaderBackground>
      <HomeHeader/>
      { media ? 
      <>
      <NavBar />
      <Admin />
      </> :
      <MenuButton onClick={()=> show()}><ModalIcon/></MenuButton> }
    </HeaderBackground>
      { showModal ? <ModalMenu animation={true} onClick={()=> show()}/> : null}
    </>
  );
}