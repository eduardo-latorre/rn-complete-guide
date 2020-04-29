import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
 
const GoalInput = props => {

    //Variables que usarán la función de Estados
    const [enteredGoal, setEnteredGoal] = useState('');

    //Función que será llamada cada vez que se ejecute el evento onChangeText.
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1, 
        borderBottomColor: 'black', 
        width: '80%'
    }
});

export default GoalInput;