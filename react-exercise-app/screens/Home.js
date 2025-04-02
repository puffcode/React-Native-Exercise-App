import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
  {
    id: "1",
    name: "Push-Ups",
    type: "Repetition",
    suggested: "Plank",
  },
  {
    id: "2",
    name: "Plank",
    type: "Duration",
    suggested: "Running",
  },
  {
    id: "3",
    name: "Running",
    type: "Duration",
    suggested: "Swimming",
  },
  {
    id: "4",
    name: "Swimming",
    type: "Duration",
    suggested: "Push-Ups",
  },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() =>
        navigation.navigate(
          item.type === "Repetition"
            ? "RepetitionExercise" // Navigate to RepetitionExercise for Repetition type
            : "DurationExercise", // Navigate to DurationExercise for Duration type
          { activityName: item.name, suggested: item.suggested }
        )
      }
      containerStyle={styles.buttonContainer}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
