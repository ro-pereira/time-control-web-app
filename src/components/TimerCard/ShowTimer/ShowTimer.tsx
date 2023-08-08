import { IShowTimeProps } from "../../../interface";

const ShowTime = ({ timer, countSelected }: IShowTimeProps) => {
  let second = timer.seconds % 60;
  let minute = Math.floor((timer.seconds % 3600) / 60);
  let hour = Math.floor(timer.seconds / 3600);

  const addZeroLessThanNine = (time: number) => {
    return time <= 9 ? "0" + time : time;
  };

  return (
    <span
      style={{
        color: countSelected ? "rgb(48, 210, 242)" : "rgb(255, 255, 255)",
      }}
    >
      {addZeroLessThanNine(hour)} : {addZeroLessThanNine(minute)} : {addZeroLessThanNine(second)}
    </span>
  );
};

export default ShowTime;
