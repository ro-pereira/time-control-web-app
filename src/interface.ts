export interface ITimer {
  id: number;
  name: string;
  seconds: number;
}

export interface ITimerCardProps {
  timer: ITimer;
  timers: ITimer[];
  setTimers: React.Dispatch<React.SetStateAction<ITimer[]>>;
}

export interface IShowTimeProps {
  timer: ITimer;
  countSelected: boolean;
}

export interface IButtonProps {
  countSelected?: boolean;
  handleAction: () => void;
  buttonTitle: string;
}