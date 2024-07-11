function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = '🥳';
  if (percentage >= 50 && percentage < 100) emoji = '🙂';
  if (percentage >= 20 && percentage < 50) emoji = '😐';
  if (percentage >= 0 && percentage < 20) emoji = '😕';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored{' '}
        <strong>
          {points} out of {maxPossiblePoints} points ({percentage}%)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Play Again
      </button>
    </>
  );
}

export default FinishScreen;
