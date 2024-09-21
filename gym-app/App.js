import React from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

import WorkoutPlanner from "./components/WorkoutPlanner";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1 h-screen`}>
      <StatusBar style={tw`flex-1`} />
      <WorkoutPlanner />
    </SafeAreaView>
  );
};

export default App;
