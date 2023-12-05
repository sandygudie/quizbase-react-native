import { useReducer, createContext } from "react";

export const QuizContext = createContext();

const initialState = {
  difficulty: "",
  programmingLanguage: "",
  scores: [],
  quizQuestions: null,
  isLoading: false,
  error: false,
};

const actions = {
  SET_DIFFICULTY: "SET_DIFFICULTY",
  SET_PROGRAMMING_LANGUAGE: "SET_PROGRAMMING_LANGUAGE",
  UPDATE_SCORE: "UPDATE_SCORE",
  GET_QUIZ_QUESTIONS: "GET_QUIZ_QUESTIONS",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DIFFICULTY:
      return { ...state, difficulty: action.difficulty };
    case actions.SET_PROGRAMMING_LANGUAGE: {
      return { ...state, programmingLanguage: action.language };
    }
    case actions.SET_LOADING: {
      return { ...state, isLoading: action.loading };
    }
    case actions.SET_ERROR: {
      return { ...state, error: action.error };
    }
    case actions.GET_QUIZ_QUESTIONS: {
      return {
        ...state,
        quizQuestions: action.quizQuestions,
      };
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

  const value = {
    state,
    selectedDifficulty: (difficulty) => {
      dispatch({ type: actions.SET_DIFFICULTY, difficulty });
    },
    setLoading: (loading) => {
      dispatch({ type: actions.SET_LOADING, loading });
    },
    setError: (error) => {
      dispatch({ type: actions.SET_ERROR, error });
    },
    getQuizQuestions: (quizQuestions) => {
      dispatch({ type: actions.GET_QUIZ_QUESTIONS, quizQuestions });
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
