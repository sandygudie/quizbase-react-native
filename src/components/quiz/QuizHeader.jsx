import { Text, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useContext } from "react";
import { QuizContext } from "../../context";

export default function QuizHeader({ pauseQuiz, scoreStatus }) {
  const { state } = useContext(QuizContext);
  const { difficulty, programmingLanguage } = state;
  return (
    <View style={styles.header}>
      <Pressable
        // style={styles.arrowIcon}
        onPress={() =>
          scoreStatus === "finalscore" ? "router.push(" / ")" : pauseQuiz()
        }
      >
        <Text>
          <Ionicons name="arrow-undo" size={30} color="#900" />
        </Text>
      </Pressable>

     
        <Text style={styles.programmingLanguage}>{programmingLanguage}</Text>
        <Text style={styles.level}>
          Level: {difficulty ? difficulty : "Easy"}
        </Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    boxShadow: "0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)",
  },
  iconButton: {
    backgroundColor: "red",
  },
  left: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },

  info: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "2rem",
    color: "white",
  },
  level: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  programmingLanguage: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  timer: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
