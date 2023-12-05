import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function CountDown({ isCountdown, setCountDownHandler }) {
  let [timer, settimer] = useState(3);

  useEffect(() => {
    let interval;
    if (isCountdown) {
      interval = setInterval(() => {
        if (timer === 0) {
          clearInterval(interval);
          setCountDownHandler(false);
        }
        settimer((timer = timer - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.countdown}>
      <Text style={styles.countdownText}> {timer}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  countdownText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
});

export default CountDown;
