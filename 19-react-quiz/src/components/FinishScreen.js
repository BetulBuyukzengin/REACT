import { useQuiz } from "../context/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiplePoints, highScore, dispatch } = useQuiz();
  const percentage = (points / maxPossiplePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80) emoji = "🎉";
  if (percentage >= 50) emoji = "😊";
  if (percentage >= 0) emoji = "😥";
  if (percentage === 0) emoji = "🤦‍♀️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of
        {maxPossiplePoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
