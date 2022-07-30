import { imageGallery } from "../../constants/content";
import { ImageGrid, ImageCard, ImageContainer } from "./ImageGalleryStyles";
import Image from "next/image";

export default function ImageGallery() {
  return (
    <ImageGrid>
    {imageGallery.map((image, index )=> (
      <>
      <ImageContainer key={index}>
      <ImageCard url={image}/>
      </ImageContainer>
      </>
    ))}
    </ImageGrid>
  );
}

