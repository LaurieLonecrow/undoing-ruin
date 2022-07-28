import { TitleText} from './TitleStyles';


export default function Title ({ title, color }) {
  return (
    <TitleText color={color}>{title}</TitleText>
  );
}