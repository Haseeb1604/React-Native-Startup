import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.list} >
                <Text>{props.value}</Text>
            </View> 
        </TouchableOpacity>
    );
}

export default GoalItem

const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        padding: 10,
      }
})