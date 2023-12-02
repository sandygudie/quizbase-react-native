import { Text, View, StyleSheet, Pressable } from "react-native";
import * as Progress from "react-native-progress";
export default function DisplayScore({ currentScore }) {
  return (
    <View style={styles.displayScore}>
      <Text style={styles.scoreText}>Your Score</Text>
      <Progress.Circle
        progress={currentScore}
        borderColor={"gray"}
        size={200}
        thickness={9}
        showsText
        animated
        textStyle={{ fontWeight: "bold" }}
        strokeCap="round"
        formatText={() => currentScore * 100 + "%"}
      />

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={() => "reload"}>
          <Text style={styles.btnText}>Try Again </Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => "reload"}>
          <Text style={styles.btnText}>Leader Board</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayScore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  scoreText: {
    fontSize: 25,
    marginVertical: 25,
    fontWeight: "bold",
    color: "white",
  },
  btnContainer: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 26,
  },
  btn: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
