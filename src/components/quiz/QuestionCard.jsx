import { Text, View, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

export default function QuestionCard({
  quiz,
  currentScore,
  index,
  stopQuiz,
  correctAnswerHandler,
  nextQuestion,
}) {
  const [optionsAnswers, setOptionsAnswers] = useState(quiz.incorrect_answers);
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    let optionList = optionsAnswers.concat(quiz.correct_answer);
    const questionsOptions = optionList.map((ele, i) => {
      return { id: i, label: ele };
    });
    let randomizedOptions = shuffleQuiz(questionsOptions);
    setOptionsAnswers(randomizedOptions);
  }, []);

  const shuffleQuiz = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  function checkAnswer(selectedOption) {
    if (selectedOption === quiz.correct_answer) {
      setSelectedOption({ name: selectedOption, color: "green" });
      correctAnswerHandler(currentScore + 0.1);
      // const audioElement = new Audio("images/correct-answer.mp3");
      //   audioElement.play();
    } else {
      setSelectedOption({ name: selectedOption, color: "red" });
      //   const audioElement = new Audio("images/wrong-answer.wav");
      //   audioElement.play();
    }
    stopQuiz();

    setTimeout(() => {
      nextQuestion(6);
    }, 3000);
  }

  const entities = {
    "&#039;": "'",
    "&quot;": '"',
    "&ntilde;": "ñ",
    "&eacute;": "é",
    "&amp;": "&",
    "&uuml;": "ü",
  };
  return (
    <View style={styles.questionCard}>
      <Text style={styles.questionCount}>
        {" "}
        Question {index < 9 ? `0${index + 1}` : index + 1} / 10
      </Text>
      <Text style={styles.questions}>
        {" "}
        {quiz.question.replace(/&#?\w+;/g, (match) => entities[match])}
      </Text>
      <View style={styles.questionsContainer}>
        {optionsAnswers.map((obj, i) => (
          <Pressable
            key={i}
            style={[
              {
                backgroundColor:
                  selectedOption.name === obj.label
                    ? selectedOption.color
                    : "white",
              },
              styles.options,
            ]}
            onPress={() => checkAnswer(obj.label)}
            disabled={selectedOption.name}
          >
            <View style={styles.optionslabel}>
              <Text
                style={[
                  {
                    color:
                      selectedOption.name === obj.label ? "white" : "black",
                  },
                  styles.optionsAlphbet,
                ]}
              >
                {" "}
                {String.fromCharCode(i + 65)}
              </Text>
              <Text
                style={[
                  {
                    color:
                      selectedOption.name === obj.label ? "white" : "black",
                  },
                  styles.optionsTitle,
                ]}
              >
                {obj.label}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    marginVertical: 30,
  },
  questionCount: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  questionsContainer: {
    marginVertical: 12,
  },
  questions: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },

  options: {
    marginVertical: 15,
    padding: 16,
    color: "black",
    borderRadius: 20,
  },
  optionslabel: {
    fontSize: 18,
    fontWeight: 600,
    width: 250,
    display: "flex",
    alignItems: "start",
    gap: 20,
    flexDirection: "row",
  },
  optionsAlphbet: {
    fontSize: 18,
    fontWeight: 600,
  },
  optionsTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
});
