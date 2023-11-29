import React, { useEffect, useState } from "react";

// import { getQuestionQuiz } from "../services/api/quiz";
import CountDown from "./Countdown";
import QustionBoard from "./Questionboard";

function StartQuiz() {
    // const [quizQuestions, setQuizQuestions] = useState([]);
  const [isCountdown, setIsCountdown] = useState(true);
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getQuestionData();
  }, []);

    const getQuestionData = async () => {
      setLoading(true);
    //   try {
    //     let result = await getQuestionQuiz(category, difficulty);
    //     setLoading(false);
    //     setQuizQuestions(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
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
