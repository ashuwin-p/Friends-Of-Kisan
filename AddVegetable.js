import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { openDatabase } from 'expo-sqlite';
import { Picker } from '@react-native-picker/picker';

const db = openDatabase('vegetables.db');

export default function AddVegetable({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  // Array of allowed options for the name field
  const allowedNames = ['Carrot', 'Tomato', 'Spinach', 'Broccoli', 'Lettuce','Rice'];

  // Create the table if not exists
  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS products (p_id INTEGER PRIMARY KEY AUTOINCREMENT, p_name TEXT, stock INTEGER, price REAL)',
        [],
        () => {
          console.log('Table created successfully');
        },
        (_, error) => {
          console.error('Error creating table', error);
        }
      );
    });
  };

  const addVegetable = () => {
    if (!name || !price || !stock) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    createTable();

    db.transaction(
      tx => {
        tx.executeSql(
          'INSERT INTO products (p_name, stock, price) VALUES (?, ?, ?)',
          [name, parseInt(stock), parseFloat(price)],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              console.log(`Vegetable ${name} added successfully`);
              Alert.alert('Success', 'Vegetable added successfully');
              setName('');
              setPrice('');
              setStock('');
              navigation.navigate('ViewVegetables');
            } else {
              console.error('Failed to add vegetable');
              Alert.alert('Error', 'Failed to add vegetable. Please try again later.');
            }
          },
          (_, error) => {
            console.error('Error adding vegetable', error);
            Alert.alert('Error', 'Failed to add vegetable. Please try again later.');
          }
        );
      }
    );
  };

  return (
    <ImageBackground source={require('./assets/add.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Add Vegetable</Text>
        <Picker
          selectedValue={name}
          onValueChange={(itemValue, itemIndex) => setName(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select a Vegetable" value="" />
          {allowedNames.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={text => setPrice(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Stock"
          value={stock}
          onChangeText={text => setStock(text)}
          keyboardType="numeric"
        />
        <Button title="Add" onPress={addVegetable} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add opacity to the background
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
