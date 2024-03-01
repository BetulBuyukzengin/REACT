import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { index, numQuestions, points, maxPossiplePoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        // Tıkladığım an güncellenecek
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiplePoints}
      </p>
    </header>
  );
}
