import React, { useState } from 'react';
import { StyleSheet,Button, View, FlatList } from 'react-native';

import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItem";

export default function App() {
  const [courseGoal, setcourseGoal] = useState([])
  const [isAddModal, setisAddModal] = useState(false)
 
  const addGoalHandler = goalTitle => { 
    setcourseGoal( currentGoals => [...currentGoals, { key: currentGoals.length.toString(), value: goalTitle}] )
    setisAddModal(false)
  }

  const removeGoalHandler= goalID => {
    setcourseGoal(currentGoals => currentGoals.filter(goal => goal.key !== goalID))
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setisAddModal(true)} />
      <GoalInput visible={isAddModal} onAddGoal={addGoalHandler}/>
      <FlatList 
        data={courseGoal} 
        renderItem={ itemData=>{
            return <GoalItem 
                      onDelete={removeGoalHandler} 
                      value={itemData.item.value} 
                      id={itemData.item.key}
                      />
          }
        }
        />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  
});
