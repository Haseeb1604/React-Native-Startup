import React from 'react'
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = props =>{
    const [enteredGoal, setenteredGoal] = useState('')
    const goalInputHandler = enteredText => setenteredGoal(enteredText)
    return (
        <View style={styles.inputContainer}>
            <TextInput
            placeholder = "Course Goal"
            style = {styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button title="Add" onPress={()=>props.onAddGoal(enteredGoal)} />
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      },
})

export default GoalInput