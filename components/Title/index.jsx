import Link from 'next/link';
import { TitleText } from './TitleStyles';


export default function Title ({ title, color, href }) {
  return (
    <Link href={href}>
    <TitleText color={color}>{title}</TitleText>
    </Link>
  );
}