import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function RepetitionExercise({ route, navigation }) {
  const { activityName, suggested } = route.params;
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activityName}</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase Count" onPress={incrementCount} />
      <Button title="Reset Count" onPress={resetCount} />
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
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});
