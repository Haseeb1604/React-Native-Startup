import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props =>{
    const [enteredGoal, setenteredGoal] = useState('')
    const goalInputHandler = enteredText => setenteredGoal(enteredText)
    const addGoalHandler = () =>{
        props.onAddGoal(enteredGoal)
        setenteredGoal('')
    }
    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder = "Course Goal"
                    style = {styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    />
                <View style={styles.buttons}>
                  <View style={styles.button}>
                    <Button 
                      title="Add" 
                      onPress={addGoalHandler} 
                    />
                  </View>
                  <View style={styles.button}>                  
                    <Button 
                      title="CANCLE"
                      onPress={props.onCancle}
                      color="red"/>
                  </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    },
    buttons: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: '60%',
      paddingVertical: 10,
    },
    button: {
      width: '40%',
    }
})

export default GoalInput