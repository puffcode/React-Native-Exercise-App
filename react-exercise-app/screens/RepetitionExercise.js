import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function RepetitionExercise({ route, navigation }) {
  const { activityName, suggested } = route.params;
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleSuggestedExercise = () => {
    if (suggested) {
      navigation.navigate(
        suggested === "Push-Ups" || suggested === "RepetitionExercise"
          ? "RepetitionExercise"
          : "DurationExercise",
        { activityName: suggested, suggested: activityName } // Pass the reverse suggestion
      );
    } else {
      Alert.alert("Error", "No suggested exercise available.");
    }
  };

  // Override the back button behavior
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      // Prevent the default back action
      e.preventDefault();

      // Navigate to the Home screen
      navigation.navigate("Home");
    });

    return unsubscribe; // Cleanup the listener on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activityName}</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase Count" onPress={incrementCount} />
      <Button title="Reset Count" onPress={resetCount} />
      <Button
        title={`Suggested: ${suggested || "None"}`}
        onPress={handleSuggestedExercise}
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
