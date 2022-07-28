import { TextContent, TextDecoration } from "./TextStyles";

export default function Text({content, color, top, left, right, width}) {

  return (
    <TextContent top={top} left={left} right={right} width={width}>
      <TextDecoration color={color}>{content}</TextDecoration>
    </TextContent>
  );
}