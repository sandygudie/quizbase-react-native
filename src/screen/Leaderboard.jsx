import { Text, StyleSheet, View } from "react-native";

export default function Leaderboard() {
  return (
    <View style={styles.leaderboard}>
      <Text style={styles.leaderText}>No Tracking yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  leaderboard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  leaderText: {
    fontSize: 20,
  },
});
