import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import DisplayScore from "../components/quiz/DisplayScore";
import CloseQuiz from "../components/quiz/CloseQuiz";
import Modal from "../components/Modal";

export default function Questionboard({ quizQuestions }) {
  // let audioElement;

  const [isOpenModal, setIsOpenModal] = useState(false);
  let [timer, setTimer] = useState(10);
  const [currentScore, setCurrentScore] = useState(0);
  let [questionCounter, setQuestionCounter] = useState(0);
  const [status, setStatus] = useState("running");
  const [scoreStatus, setScoreStatus] = useState("");

  // console.log(quizQuestions);
  useEffect(() => {
    let interval;
    if (quizQuestions.length) {
      if (status === "running") {
        interval = setInterval(() => {
          // time up
          if (timer === 1) {
            setStatus("stop");
            setScoreStatus("timeup");
            // audioElement = new Audio("images/time-up.wav");
            // audioElement.play();
            setTimeout(() => {
              nextQuestion();
            }, 2000);
          }
          setTimer((timer = timer - 1));
        }, 1000);
      } else if (status === "pause") {
        clearInterval(interval);
      } else {
        clearInterval(interval);
      }
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [timer, status]);

  const correctAnswerHandler = (currentScore) => {
    setCurrentScore(currentScore);
  };
  console.log(currentScore);
  const nextQuestion = () => {
    setQuestionCounter((questionCounter = questionCounter + 1));
    if (questionCounter < quizQuestions.length) {
      setTimer(10);
      setStatus("running");
      setScoreStatus("");
    } else {
      setStatus("stop");
      setTimer(0);
      setScoreStatus("finalscore");
    }
  };

  const pauseQuiz = () => {
    setIsOpenModal(true);
    setStatus("pause");
  };

  const startQuiz = () => {
    setIsOpenModal(false);
    setStatus("running");
  };

  const stopQuiz = () => {
    setStatus("stop");
  };

  const TimeUpComponent = () => {
    return (
      <View>
        <Text>Time Up</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.quiz_container}>
      <View>
        <QuizHeader pauseQuiz={pauseQuiz} scoreStatus={scoreStatus} />

        <View>
          {scoreStatus === "finalscore" ? (
            <DisplayScore currentScore={currentScore} />
          ) : quizQuestions.length === 0 ? (
            <Text style={styles.noQuiz}>No Quiz available</Text>
          ) : quizQuestions.length ? (
            <>
              <View>
                <Text style={styles.timer}>
                  Timer : 00: {timer <= 9 ? `0${timer}` : timer}
                </Text>
              </View>
              {quizQuestions.map((list, i) => {
                return (
                  i === questionCounter && (
                    <QuestionCard
                      currentScore={currentScore}
                      quiz={list}
                      index={i}
                      key={i}
                      stopQuiz={stopQuiz}
                      timer={timer}
                      nextQuestion={nextQuestion}
                      correctAnswerHandler={correctAnswerHandler}
                    />
                  )
                );
              })}
            </>
          ) : scoreStatus === "timeup" ? (
            <TimeUpComponent />
          ) : null}
          {isOpenModal && (
            <Modal>
              <CloseQuiz startQuiz={startQuiz} />
            </Modal>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  quiz_container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#2c3544",
    color: "white",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    boxShadow: "0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)",
  },
  left: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  noQuiz: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  info: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 24,
    color: "inherit",
  },
  level: {
    fontWeight: "bold",
    fontSize: 20,
    color: "inherit",
  },
  programmingLanguage: {
    fontWeight: "bold",
    fontSize: 20,
    color: "inherit",
  },
  timer: {
    marginVertical: 20,
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
