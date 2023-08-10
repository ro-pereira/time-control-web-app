import { styled } from "styled-components";
import { IButtonProps } from "../../interface";

const StyledButton = styled.button`
  &.new-timer {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 50%;
  }
`;

const Button = ({ countSelected, handleAction, buttonTitle }: IButtonProps) => {
  const handleTitleChange = () => {
    if (buttonTitle === "Start Count") {
      return countSelected ? "Stop" : "Start";
    }

    if (buttonTitle === "New timer") {
      return "+";
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

    if (buttonTitle === "New timer") {
      return "btn-success text-center new-timer";
    }
  };

  return (
    <StyledButton className={`btn ${handleStyle()}`} onClick={handleAction}>
      {handleTitleChange()}
    </StyledButton>
  );
};

export default Button;
