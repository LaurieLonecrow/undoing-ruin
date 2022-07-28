import { HeaderImageContainer } from './HeaderImageStyles'

export default function HeaderImage({url, edge, position, gray}) {
  return (
    <HeaderImageContainer gray={gray} edge={edge} url={url} position={position}/>
  );
}