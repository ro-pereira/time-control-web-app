import styled from "styled-components";

const HomePage = styled.main`
  max-width: 100vw;
  min-height: calc(100vh - 5rem);
  color: rgb(255, 255, 255);
  border-top: 1px solid rgb(241, 240, 240);
  border-radius: 2rem 2rem 0rem 0rem;
`;

const Home = () => {
  return (
    <HomePage className="d-flex flex-column align-items-center">Home</HomePage>
  );
};

export default Home;
