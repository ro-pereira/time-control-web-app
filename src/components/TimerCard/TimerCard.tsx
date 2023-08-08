import styled from "styled-components";
import { ITimerCardProps } from "../../interface";
import ShowTimer from "./ShowTimer/ShowTimer";
import { useState } from "react";

const TimerCardStyled = styled.div`
  width: 200px;
  position: relative;
  border-radius: 0.5rem;
`;

const TimerCard = ({ timer }: ITimerCardProps) => {
  const [countSelected, setCountSelected] = useState(false);
  return (
    <TimerCardStyled className="d-flex flex-column justify-content-center p-4 border gap-4">
      <div className="d-flex-flex-column justify-content-center">
        <div className="d-flex  justify-content-center gap-1 mb-2">
          {timer.name}
        </div>
        <div className="d-flex justify-content-center">
          <ShowTimer timer={timer} countSelected={countSelected} />
        </div>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
          className={`col-7 btn ${
            countSelected ? "btn-danger" : "btn-outline-success"
          }`}
          onClick={() => setCountSelected(!countSelected)}
        >
          {countSelected ? "Stop" : "Start"}
        </button>
        <button
          className={`btn ${countSelected ? "btn-outline-info" : "btn-dark"}`}
        >
          reset
        </button>
      </div>
    </TimerCardStyled>
  );
};

export default TimerCard;
