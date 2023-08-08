import styled from "styled-components";

const HeaderStyled = styled.header`
  color: rgb(241, 240, 240);
  height: 5rem;
`;

const TitleHeader = styled.h1`
  font-size: 1.6rem;
`;

const Header = () => {
  return (
    <HeaderStyled className="d-flex align-items-center justify-content-center ">
      <TitleHeader className="text-center">Time Control</TitleHeader>
    </HeaderStyled>
  );
};

export default Header;
