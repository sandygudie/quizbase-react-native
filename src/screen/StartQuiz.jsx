import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { QuizContext } from "../context";
import { getQuestionQuiz } from "../services/api/quiz";
import CountDown from "./Countdown";
import { useIsFocused } from "@react-navigation/native";
import { View,  StyleSheet } from "react-native";
function StartQuiz({ navigation }) {
  const { state, getQuizQuestions, setError, setLoading} = useContext(QuizContext);
  const { difficulty, programmingLanguage } = state;
  const [isCountdown, setIsCountdown] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setIsCountdown(true);
      getQuestionData();
    }
  }, [isFocused]);

  const getQuestionData = async () => {
    setLoading(true);
    try {
      let response = await getQuestionQuiz(programmingLanguage, difficulty);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setLoading(false);
      const data = await response.json();
      getQuizQuestions(data.data);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.error(err);
    }
  };

  const setCountDownHandler = (counter) => {
    setIsCountdown(counter);
    navigation.navigate("Questionboard");
  };

  return (
    <View style={styles.startQuiz}>
      {isCountdown ? (
        <CountDown isCountdown setCountDownHandler={setCountDownHandler} />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  startQuiz: {
    color: "white",
    paddingVertical: 50,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "#2c3544",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loadingText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
export default StartQuiz;
