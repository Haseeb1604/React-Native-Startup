import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [courseGoal, setcourseGoal] = useState([])
 
  const addGoalHandler = goalTitle => { 
    setcourseGoal( currentGoals => {
      [...currentGoals, { key: currentGoals.length.toString(), value: goalTitle}] 
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
        data={courseGoal} 
        renderItem={itemData=>
          <View style={styles.list} >
            <Text>{itemData.item.value}</Text>
          </View>} 
        />

    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  list: {
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    padding: 10,
  }
});
