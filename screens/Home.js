import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
  {
    id: "1",
    name: "Push-Ups",
    type: "Repetition",
    suggested: "DurationExercise",
  },
  { id: "2", name: "Plank", type: "Duration", suggested: "RepetitionExercise" },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <Button
      title={item.name}
      onPress={() =>
        navigation.navigate(
          item.type === "Repetition"
            ? "RepetitionExercise"
            : "DurationExercise",
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
