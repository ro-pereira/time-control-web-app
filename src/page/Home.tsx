import { useState } from "react";
import styled from "styled-components";
import TimerCard from "../components/TimerCard/TimerCard";
import { px2vw } from "../globalStyle";
import { ITimer } from "../interface";
import Button from "../components/Button/Button";

const HomePage = styled.main`
  max-width: 100vw;
  min-height: calc(100vh - 5rem);
  color: rgb(255, 255, 255);
  border-top: 1px solid rgb(241, 240, 240);
  border-radius: 2rem 2rem 0rem 0rem;
  padding: 4rem ${px2vw(20)};
`;

const Container = styled.div`
  @media (max-width: 768px) {
    width: ${px2vw(700, 768)};
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    width: ${px2vw(1200)};
  }

  @media (min-width: 1440px) {
    width: 1200px;
  }

  &:hover > :not(:hover) {
    background: rgba(134, 134, 134, 0.089);
    transform: scale(0.8) !important;
  }
`;

let newId = 0;
const Home = () => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const handleAddNewTimer = () => {
    const newTimer = { id: newId, name: "new timer", seconds: 0 };
    setTimers([...timers, newTimer]);
    newId += 1;
  };

  return (
    <HomePage className="d-flex flex-column align-items-center ">
      <Container className="d-flex flex-wrap justify-content-center  gap-5">
        {timers.map((timer) => {
          return (
            <TimerCard
              key={timer.id}
              timer={timer}
              timers={timers}
              setTimers={setTimers}
            />
          );
        })}
        {timers.length === 0 && (
          <div style={{ color: "#fff" }}>add new timer</div>
        )}
      </Container>
      <Button handleAction={handleAddNewTimer} buttonTitle={"New timer"} />
    </HomePage>
  );
};

export default Home;
