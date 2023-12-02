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
    width: '90%',
    maxWidth:500,
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



// <label
          //   onChange={(e) => onChangeValue(index, e)}
          //   key={index}
          //   htmlFor={options}
          //   className={`px-3 py-2 bg-light-secondary cursor-pointer
          //    text-base md:text-lg font-bold my-5 rounded-xl
          //     block ${
          //       scoreStatus === "" &&
          //       timer > 0 &&
          //       "hover:text-primary hover:bg-white"
          //     } `}
          // >
          //   <TextInput
          //     type="radio"
          //     id={options}
          //     value={options}
          //     name="quiz"
          //     className="radio-input hidden"
          //     disabled={scoreStatus !== "" || timer === 0}
          //   />
          //   <div className="flex items-center justify-between">
          //     <div className="flex items-center">
          //       <p className="flex items-center justify-center bg-white rounded-full px-3 py-1 text-primary mr-3">
          //         {" "}
          //         {String.fromCharCode(index + 65)}
          //       </p>
          //       <span>{options} </span>
          //     </div>

          //     {selectedIndex === index &&
          //       (scoreStatus === "correct" ? (
          //         <AiFillCheckCircle className="font-bold fill-green-500 text-2xl" />
          //       ) : scoreStatus === "wrong" ? (
          //         <AiFillCloseCircle className="font-bold fill-green-500 text-2xl" />
          //       ) : null)}
          //   </div>
          // </label>