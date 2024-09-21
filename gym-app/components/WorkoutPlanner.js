import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tw from "twrnc"; // Import twrnc

const handleAddExercise = async () => {
  const exerciseData = { exercise, sets, reps, weight };
  try {
    const jsonValue = JSON.stringify(exerciseData);
    await AsyncStorage.setItem("@workout", jsonValue);
    console.log("Ćwiczenie zapisane");
  } catch (e) {
    console.log("Błąd zapisu:", e);
  }
};

const getWorkout = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@workout");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Błąd odczytu:", e);
  }
};

const WorkoutPlanner = () => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleAddExercise = () => {
    console.log(
      `Exercise: ${exercise}, Sets: ${sets}, Reps: ${reps}, Weight: ${weight}`
    );
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-4xl mb-4`}>Plan Treningowy</Text>
      <TextInput
        style={tw`border p-2 mb-2 w-3/4`}
        placeholder="Ćwiczenie"
        value={exercise}
        onChangeText={setExercise}
      />
      <TextInput
        style={tw`border p-2 mb-2 w-3/4`}
        placeholder="Serie"
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
      />
      <TextInput
        style={tw`border p-2 mb-2 w-3/4`}
        placeholder="Powtórzenia"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <TextInput
        style={tw`border p-2 mb-4 w-3/4`}
        placeholder="Waga (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <Button title="Dodaj ćwiczenie" onPress={handleAddExercise} />
    </View>
  );
};

export default WorkoutPlanner;
