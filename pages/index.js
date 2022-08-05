import { Container, FlexSectionRow } from "../styles/GlobalStyles";
import HeaderImage from "../components/HeaderImage";
import Text from "../components/Text";
import { homeContent } from "../constants/content";
import InfoTile from "../components/TextTile";

export default function Home() {
  return (
    <>
    <Container black>
    <HeaderImage position={'center'} edge={'550px 0 220px 0 #5d6f66 inset'} url="https://res.cloudinary.com/lonecrow/image/upload/v1659218342/Undoing-Ruin/flowers_vsilou.jpg"/>
    <Text top={'150px'} color={"#F9F9F1"} width={'50%'} content={homeContent.description}/>
    </Container>
    <Container padding={'40px'}>
      <FlexSectionRow>
    <InfoTile button={'services'} url="https://res.cloudinary.com/lonecrow/image/upload/v1659120703/Undoing-Ruin/IMG_3645_atndyz.jpg"/>
    <InfoTile button={'plants'} url="https://res.cloudinary.com/lonecrow/image/upload/v1659120703/Undoing-Ruin/IMG_3652_bmmkil.jpg"/>
    <InfoTile button={'projects'} url="https://res.cloudinary.com/lonecrow/image/upload/v1659120702/Undoing-Ruin/IMG_1822_nksf7k.jpg"/>  
      </FlexSectionRow>
    </Container>
    <Container black>
    <HeaderImage position={'45% 25%'} edge={'50px 50px 220px 0 black inset'} url="https://res.cloudinary.com/lonecrow/image/upload/v1658857695/Undoing-Ruin/IMG_1893_uti9tr.jpg"/>
    <Text top={'100px'} color={"white"} width={'100%'} content={homeContent.lorem}/>
    </Container>
    </>
  );
}
