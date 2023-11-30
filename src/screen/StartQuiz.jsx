import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../context";
import { getQuestionQuiz } from "../services/api/quiz";
import CountDown from "./Countdown";
import QustionBoard from "./Questionboard";

function StartQuiz() {
  const { state } = useContext(QuizContext);
  const { difficulty, programmingLanguage } = state;
  const [isCountdown, setIsCountdown] = useState(true);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getQuestionData();
  }, []);

  const getQuestionData = async () => {
    setLoading(true);
    try {
      let response = await getQuestionQuiz(programmingLanguage, difficulty);
      setLoading(false);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const setCountDownHandler = (counter) => {
    setIsCountdown(counter);
  };

  return (
    <div className="">
      {isCountdown ? (
        <CountDown isCountdown setCountDownHandler={setCountDownHandler} />
      ) : (
        <QustionBoard
          isLoading={isLoading}

          //   quizQuestions={quizQuestions}
        />
      )}
    </div>
  );
}

export default StartQuiz;
