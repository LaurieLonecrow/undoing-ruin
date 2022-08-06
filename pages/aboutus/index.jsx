import ImageGallery from "../../components/ImageGallery";
import { Container, FlexSectionRow } from "../../styles/GlobalStyles";

export default function About() {
  return (
    <Container padding={'200px 20px 0'}>
    <FlexSectionRow>
    <ImageGallery/>
    </FlexSectionRow>
    </Container>
  )
  }