import React, { useState } from "react"; // useState is a react hook
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); // boolean to show or hide the modal
  // list of goals
  const [courseGoals, setCourseGoals] = useState([]); // array of goals

  function startAddGoalHandler() {
    setModalIsVisible(true); // show the modal
  }

  function endAddGoalHandler() {
    setModalIsVisible(false); // hide the modal
  }

  // add when button is pressed
  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  // DElete when item is pressed
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      // returns a new array with all the goals that do not match the id's of the deleted goal.
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={Platform.OS === "android" ? "#ffffff" : "#5e0acc"}
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      {/*
       - Wrapping the scrollview in a view to restrict the available height so that the scrollview can can take up the remaining space.
       */}
      <View style={styles.goalsContainer}>
        {/* Makes content for list and data scrollable */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id} // ensures that we are passing the id of the item to delete
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          // function will auto recieve the item and index
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // forces the view to take up the entire screen
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
