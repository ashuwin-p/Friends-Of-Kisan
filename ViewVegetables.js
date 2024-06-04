import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ImageBackground } from 'react-native';
import { openDatabase } from 'expo-sqlite';

const db = openDatabase('vegetables.db');

export default function ViewVegetables({ navigation }) {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    refreshVegetables();
  }, []);

  const refreshVegetables = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM products', [], (_, { rows }) => {
        setVegetables(rows._array);
      });
    });
  };

  return (
    <ImageBackground source={require('./assets/add.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Vegetables</Text>
        <FlatList
          data={vegetables}
          renderItem={({ item }) => (
            <View style={styles.vegetable}>
              <Text>Name: {item.p_name}</Text>
              <Text>Price: {item.price}</Text>
              <Text>Stock: {item.stock}</Text>
            </View>
          )}
          keyExtractor={item => item.p_id.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background to improve readability
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  vegetable: {
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background for each vegetable item
  },
});
