import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  //* Dakika sn cinsinden yazma
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      //! cleanup func.
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
