import React from "react";
import {
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Text,
  View,
} from "react-native";
import { Categories } from "../../constants/data";
import Difficulty from "../components/Difficulty";
import { useContext } from "react";
import { QuizContext } from "../context";

const avatar = require("../../assets/images/avatar/baddie.png");

export default function Quiz({ route }) {
  const { navigate } = route.params;
  const { selectedProgramminglanguage } = useContext(QuizContext);

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Image source={avatar} style={{ width: 30, height: 30 }} />
        <Text style={styles.username}>Username</Text>
      </View>
      <ScrollView style={styles.quizcontainer}>
        <View>
          <Text style={styles.title}>Programming Languages</Text>
          <Difficulty />
        </View>
        <View style={styles.buttonContainer}>
          {Categories.map(({ icon, id, name }) => (
            <Pressable
              onPress={() => {
                navigate(), selectedProgramminglanguage(name);
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#E91E63" : "#2c3544",
                },
                styles.button,
              ]}
              key={id}
            >
              <Image source={icon} style={{ width: 80, height: 80 }} />
              <Text style={styles.buttonText}>{name}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
  headercontainer: {
    width: "100%",
    padding: 20,
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  username: {
    fontSize: 16,
  },
  quizcontainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 30,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 12,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },

  button: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    width: 150,
    height: 200,
    padding: 20,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
