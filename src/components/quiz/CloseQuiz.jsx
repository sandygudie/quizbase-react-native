import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
export default function CloseQuiz({ closeQuiz,startQuiz}) {
  return (
    <View style={styles.closequiz_container}>
      <Text style={styles.closeInfo}>Close Quiz</Text>
      <View style={styles.closeInfoBtn_container}>
        <Pressable  onPress={() => startQuiz()}
        style={styles.closeInfoBtn}>
          <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
        <Pressable onPress={() => closeQuiz()} style={styles.closeInfoBtn}>
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closequiz_container: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    zIndex:9999
  },
  closeInfo: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  closeInfoBtn_container: {
    display: "flex",
    alignItems: "start",
    gap: 20,
    flexDirection: "row",
    marginTop: 40,
  },
  closeInfoBtn: {
    backgroundColor: "red",
    fontWeight: "bold",
    padding: 15,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
