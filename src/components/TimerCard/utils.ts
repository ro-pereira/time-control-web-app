import { ITimer } from "../../interface";

export const handleTimerCount = (timers: ITimer[], id: number) => {
  const allTimers = [...timers];
  const timerFound = allTimers.find((e) => e.id === id);
  if (!timerFound) {
    throw new Error("not found");
  }

  const handleStartCounting = () => {
    timerFound.seconds += 1;
    return allTimers;
  };

  const deleteTimer = (timer: ITimer) => {
    const indexOfTimer = allTimers.indexOf(timer);
    allTimers.splice(indexOfTimer, 1);
    return allTimers;
  };

  const resetSeconds = () => {
    timerFound.seconds = 0;
    return allTimers;
  };

  const changeTitle = (title: string) => {
    timerFound.name = title;
    return allTimers;
  };

  return { handleStartCounting, deleteTimer, resetSeconds, changeTitle };
};
