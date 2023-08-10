import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import iconClose from "../../assets/icon-close.png";
import { ITimerCardProps } from "../../interface";
import ShowTimer from "./ShowTimer/ShowTimer";
import { handleTimerCount } from "./utils";
import Button from "../Button/Button";

const TimerCardStyled = styled.div`
  width: 250px;
  height: 200px;
  position: relative;
  border-radius: 0.5rem;
`;

const InputTitle = styled.input`
  width: 80%;
  text-align: center;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  &:focus {
    background: rgb(248, 248, 248);
    color: #000000;
    border: 2px solid #e0a800 !important;
    border-radius: 0.4rem;
  }
`;

const ButtonDelete = styled.button`
  all: unset;
  height: auto;
  width: auto;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const IconDelete = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const TimerCard = ({ timer, timers, setTimers }: ITimerCardProps) => {
  const [countSelected, setCountSelected] = useState(false);
  const { handleStartCounting, deleteTimer, resetSeconds, changeTitle } =
    handleTimerCount(timers, timer.id);
  const [title, setTitle] = useState(timer.name);

  useEffect(() => {
    if (countSelected) {
      const intervalId = setInterval(() => {
        setTimers(handleStartCounting());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [countSelected, handleStartCounting]);

  const handleDeleteTimer = () => {
    setTimers(deleteTimer(timer));
  };

  const handleResetSeconds = () => {
    setTimers(resetSeconds());
  };

  useEffect(() => {
    setTimers(changeTitle(title));
  }, [title]);

  const handleChangeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    const newTitle = evt.target.value;
    if (newTitle.trim().length < 15) {
      setTitle(newTitle.trim());
    } else {
      alert("deve conter menos que 15 caracteres");
    }
  };

  const handleStartCountingSelected = () => {
    setCountSelected(!countSelected);
  };

  return (
    <TimerCardStyled className="d-flex flex-column justify-content-center align-items-center border gap-4">
      <ButtonDelete onClick={handleDeleteTimer}>
        <IconDelete src={iconClose} alt="icon close" />
      </ButtonDelete>
      <div className="d-flex-flex-column justify-content-center">
        <div className="d-flex  justify-content-center mb-2">
          <InputTitle
            type="text"
            value={title}
            onChange={(evt) => handleChangeTitle(evt)}
          />
        </div>
        <ShowTimer timer={timer} countSelected={countSelected} />
        {/* </div> */}
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button
          countSelected={countSelected}
          handleAction={handleStartCountingSelected}
          buttonTitle={"Start Count"}
        />

        <Button
          countSelected={countSelected}
          handleAction={handleResetSeconds}
          buttonTitle={"reset"}
        />
      </div>
    </TimerCardStyled>
  );
};

export default TimerCard;
