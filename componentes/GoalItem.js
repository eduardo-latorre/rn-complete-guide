import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*
    Al crear un ítem propio, debemos incluir sus propiedades con la palabra props,
    en el ejemplo se crea la propiedad title, la cual definiría un componente como:

    <GoalItem title="">
*/

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;