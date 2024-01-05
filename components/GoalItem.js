import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    // Bind function to pass in the id of the item to delete
    <Pressable
      // for android
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      // for ios
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});
