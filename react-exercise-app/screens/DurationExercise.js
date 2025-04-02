import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function DurationExercise({ route, navigation }) {
  const { activityName, suggested } = route.params;
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null); // Use useRef to persist intervalId across renders

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
  };

  // Stop the timer
  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId.current); // Clear the interval using the ref
      intervalId.current = null; // Reset the intervalId
    }
  };

  // Reset the timer
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
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

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      clearInterval(intervalId.current); // Clear the interval on unmount
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activityName}</Text>
      <Text style={styles.timer}>Timer: {timer} seconds</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Stop Timer" onPress={stopTimer} />
      <Button title="Reset Timer" onPress={resetTimer} />
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
  timer: {
    fontSize: 18,
    marginBottom: 20,
  },
});
