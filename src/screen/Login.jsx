import { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  const [text, onChangeText] = useState("")

// const handleSubmit =()=>{}


  return (
    <View style={styles.login_container}>
      <Text style={styles.login_text}>Welcome</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Create a unique name"
        style={styles.inputfield}
      />
      <Pressable
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.button}
      >
        <Text style={styles.buttonText}> Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  login_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#2c3544",
  },
  login_text: {
    fontSize: 35,
    marginBottom: 20,
    color: "#ffff",
  },
  inputfield: {
    padding: 20,
    backgroundColor: "#ffff",
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },

  button: {
    borderRadius: 10,
    marginTop: 40,
    width: 200,
    padding: 15,
    backgroundColor: "#E91E63",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
  },
});
