import { IButtonProps } from "../../interface";

const Button = ({ countSelected, handleAction, buttonTitle }: IButtonProps) => {
  const handleTitleChange = (): string => {
    if (buttonTitle === "Start Count") {
      return countSelected ? "Stop" : "Start";
    }

    return buttonTitle;
  };

  const handleStyle = () => {
    if (buttonTitle === "Start Count") {
      return `col-7 ${countSelected ? "btn-danger" : "btn-outline-success"}`;
    }

    if (buttonTitle === "reset") {
      return countSelected ? "btn-outline-info" : "btn-dark";
    }
  };

  return (
    <button className={`btn ${handleStyle()}`} onClick={handleAction}>
      {handleTitleChange()}
    </button>
  );
};

export default Button;
