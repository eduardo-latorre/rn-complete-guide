import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './componentes/GoalItem';
import GoalInput from './componentes/GoalInput';

export default function App() {

  /* 
  - En React la funciones que incluyan () se ejecutarán al cargarse la aplicación,
  en cuando estas estén sin paréntesis se ejecutarán cuando el evento se activado.

  - La funciones se pueden incluir dentro de la función principal

  - const se utiliza para declarar variables junto con su función setter

  - Cómo implementar ScrollView con una listado (array):
      <ScrollView>
        {courseGoals.map(goal => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>

  - FlatList permite utilizar mejor las listas de varios objetos
    esto requiere el uso de las singuiente funciones:
    - keyExtractor: para obtener la key de cada objeto en la lista
    - data: la variable con la lista de objetos
    - renderedItem: el objeto que será mostrado de la lista como texto
  */

  //Variable Array que contendrán los cursos
  const [courseGoals, setCourseGoals] = useState([]);
  

  //Función que cargará la lista de Goals
  const addGoalHandler = goalTitle => {
    //currentGoals es el nombre de la variable de entrenada que espera la función set como array
    //la cual se instancia como la foto del antiguo array más el nuevo elemento
    //setCourseGoals(currentGoals => [...currentGoals, enteredGoal]); Array de Strings

    //La variable curentGoals recibe un arreglo de objetos con su respectiva Key para que el componente
    //FlatList funcione correctamente
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
