import { useEffect, useReducer } from 'react';
import Error from './Error';
import FinishScreen from './FinishScreen';
import Header from './Header';
import Loader from './Loader';
import Main from './Main';
import NextButton from './NextButton';
import Progress from './Progress';
import Question from './Question';
import StartScreen from './StartScreen';

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active, 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
      };
    case 'newAnswer':
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'reset':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };
    default:
      throw new Error('Unknown action');
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((acc, question) => {
    return acc + question.points;
  }, 0);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              {...{ index, numQuestions, points, maxPossiblePoints, answer }}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton {...{ dispatch, answer, numQuestions, index }} />
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            {...{ points, maxPossiblePoints, highscore, dispatch }}
          />
        )}
      </Main>
    </div>
  );
}
