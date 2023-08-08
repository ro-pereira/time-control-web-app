export interface ITimer {
  id: number;
  name: string;
  seconds: number;
}

export interface ITimerCardProps {
  timer: ITimer;
}

export interface IShowTimeProps {
  timer: ITimer;
  countSelected: boolean;
}
