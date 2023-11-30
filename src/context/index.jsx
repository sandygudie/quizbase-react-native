import { useReducer, createContext } from "react";

export const QuizContext = createContext();

const initialState = {
  difficulty: "",
  programmingLanguage: "",
  scores: [],
};

const actions = {
  SET_DIFFICULTY: "SET_DIFFICULTY",
  SET_PROGRAMMING_LANGUAGE: "SET_PROGRAMMING_LANGUAGE",
  UPDATE_SCORE: "UPDATE_SCORE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DIFFICULTY:
      return {...state,
        difficulty: action.difficulty,
      };
    case actions.SET_PROGRAMMING_LANGUAGE: {
      return { ...state,programmingLanguage: action.language };
    }
    case actions.UPDATE_SCORE: {
      const updatedScore = state.scores.map((score) =>
        score.name === action.name
          ? { ...score, name: action.score }
          : [...score, action]
      );
      return { scores: updatedScore };
    }
    default:
      return state;
  }
};
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
console.log(state)
  const value = {
    state,
    selectedDifficulty: (difficulty) => {
      dispatch({ type: actions.SET_DIFFICULTY, difficulty });
    },
    selectedProgramminglanguage: (language) => {
      dispatch({ type: actions.SET_PROGRAMMING_LANGUAGE, language });
    },
    updatedScore: (score) => {
      dispatch({ type: actions.UPDATE_SCORE, score });
    },
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
