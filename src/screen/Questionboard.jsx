import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import DisplayScore from "../components/quiz/DisplayScore";
import CloseQuiz from "../components/quiz/CloseQuiz";
import Modal from "../components/Modal";
import { useContext } from "react";
import { QuizContext } from "../context";

export default function Questionboard({ navigation }) {
  // let audioElement;
  const { state } = useContext(QuizContext);
  const { quizQuestions, error } = state;

  const [isOpenModal, setIsOpenModal] = useState(false);
  let [timer, setTimer] = useState(4);
  const [currentScore, setCurrentScore] = useState(0);
  let [questionCounter, setQuestionCounter] = useState(0);
  const [status, setStatus] = useState("running");
  const [scoreStatus, setScoreStatus] = useState("");
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Request Failed! Check Network Connection
        </Text>
      </View>
    );
  }
  useEffect(() => {
    let interval;
    if (quizQuestions.length) {
      console.log(status);
      if (status === "running") {
        interval = setInterval(() => {
          console.log(timer);
          if (timer === 1) {
            // console.log(setStatus)
            setStatus("stop");
            setScoreStatus("timeup");
            // audioElement = new Audio("images/time-up.wav");
            // audioElement.play();
            setTimeout(() => {
              nextQuestion();
              setStatus("running");
            }, 1000);
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

  const nextQuestion = () => {
    setQuestionCounter((questionCounter = questionCounter + 1));
    if (questionCounter < quizQuestions.length) {
      setTimer(4);
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

  const closeQuiz = () => {
    setIsOpenModal(false);
    navigation.navigate("Dashboard");
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
      <View style={styles.quizDisplay}>
        <QuizHeader
          navigation={navigation}
          pauseQuiz={pauseQuiz}
          scoreStatus={scoreStatus}
        />
        <View>
          {scoreStatus === "finalscore" ? (
            <DisplayScore navigation={navigation} currentScore={currentScore} />
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
                return i === questionCounter ? (
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
                ) : null;
              })}
            </>
          ) : scoreStatus === "timeup" ? (
            <TimeUpComponent />
          ) : null}
        </View>
      </View>

      {isOpenModal && status === "pause" && (
        <Modal>
          <CloseQuiz closeQuiz={closeQuiz} startQuiz={startQuiz} />
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  quiz_container: {
    color: "white",
    height: "100%",
    backgroundColor: "#2c3544",
  },
  quizDisplay: {
    height: "100%",
    paddingVertical: 50,
    paddingHorizontal: 20,
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
    fontSize: 16,
    color: "white",
    marginVertical: 50,
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
  errorContainer: {
    color: "white",
    height: "100%",
    backgroundColor: "#2c3544",
  },
  errorText: {
    height: "100%",
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    color: "white",
    justifyContent: "center",
  },
});
