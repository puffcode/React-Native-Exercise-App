import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DurationExercise({ route, navigation }) {
  const { activityName, suggested } = route.params;
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    setTimer((prev) => prev + 1);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activityName}</Text>
      <Text style={styles.timer}>Timer: {timer} seconds</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Reset Timer" onPress={resetTimer} />
      <Button
        title="Suggested Exercise"
        onPress={() => navigation.navigate(suggested)}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  timer: {
    fontSize: 18,
    marginBottom: 20,
  },
});
