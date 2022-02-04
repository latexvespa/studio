import tw, { styled } from "twin.macro";

export const Header = styled.header`
  grid-area: 1 / 1 / 2 / 3;
  padding-left: 40px;

  ${tw`
    bg-gray-200
    text-lg
    uppercase
  `}
`;