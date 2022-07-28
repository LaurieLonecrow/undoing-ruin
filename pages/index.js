import { Container } from "../styles/GlobalStyles";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import Text from "../components/Text";
import Footer from "../components/Footer";
import { homeContent } from "../constants/content";

export default function Home() {
  return (
    <Container>
    <Header/>
    <Container black>
    <HeaderImage position={'center'} edge={'550px 0 220px 0 black inset'} url="https://res.cloudinary.com/lonecrow/image/upload/v1658537037/Undoing-Ruin/IMG_3905_iwr40w.jpg"/>
    <Text top={'50px'} color={"gold"} width={'50%'} content={homeContent.description}/>
    </Container>
    <Container>
    <Text top={'100px'} right={"20px"} color={"black"} width={'50%'} content={homeContent.lorem}/>
    <Text top={'100px'} color={"white"} width={'50%'} content={homeContent.lorem}/>
    </Container>
    <Container black>
    <HeaderImage position={'45% 25%'} edge={'50px 50px 220px 0 black inset'} url="https://res.cloudinary.com/lonecrow/image/upload/v1658857695/Undoing-Ruin/IMG_1893_uti9tr.jpg"/>
    <Text top={'100px'} color={"white"} width={'100%'} content={homeContent.lorem}/>
    </Container>
    <Footer/>
    </Container>
  );
}
