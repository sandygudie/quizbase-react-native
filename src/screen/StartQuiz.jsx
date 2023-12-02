import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../context";
import { getQuestionQuiz } from "../services/api/quiz";
import CountDown from "./Countdown";
import QustionBoard from "./Questionboard";
import { View} from "react-native";
function StartQuiz() {
  const { state } = useContext(QuizContext);
  const { difficulty, programmingLanguage } = state;
  const [isCountdown, setIsCountdown] = useState(true);
  // const [isLoading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    getQuestionData();
  }, []);

  const getQuestionData = async () => {
    // setLoading(true);
    try {
      let response = await getQuestionQuiz(programmingLanguage, difficulty);
      // setLoading(false);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setQuizQuestions(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const setCountDownHandler = (counter) => {
    setIsCountdown(counter);
  };

  return (
    <View className="">
      {isCountdown ? (
        <CountDown isCountdown setCountDownHandler={setCountDownHandler} />
      ) : (
        <QustionBoard state={state} quizQuestions={quizQuestions} />
      )}
    </View>
  );
}

export default StartQuiz;
