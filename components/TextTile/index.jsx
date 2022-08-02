import { TileContainer, TileButton } from "./TextTileStyle"
export default function InfoTile({button, url}) {

  return (
    <>
    <TileContainer url={url}>
        <TileButton>{button}</TileButton>
    </TileContainer>
    </>
  );
}

