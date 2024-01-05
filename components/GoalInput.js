import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  // state is a special react construct
  const [enteredGoal, setEnteredGoal] = useState("");

  // input handler
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  // This is calling the function passed in as a prop from App.js that is then passed to GoalInput.js as a prop to execute when the button is pressed. - Clever!
  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal(""); // Reset enteredGoal after adding
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.TextInput}
          onChangeText={goalInputHandler}
          // add binding to reset the input
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8, // left and right
  },
});
