import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { openDatabase } from 'expo-sqlite';

const db = openDatabase('vegetables.db');

export default function UpdateVegetable({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const updateVegetable = () => {
    if (!name || !price || !stock) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    db.transaction(
      tx => {
        tx.executeSql(
          'UPDATE products SET price = ?, stock = ? WHERE p_name = ?',
          [parseFloat(price), parseInt(stock), name],
          () => {
            console.log(`Product with name ${name} updated successfully`);
            setName('');
            setPrice('');
            setStock('');
            Alert.alert('Success', `Product with name ${name} updated successfully`);
          },
          (_, error) => {
            console.error('Error updating product', error);
            Alert.alert('Error', 'Failed to update product. Please try again later.');
          }
        );
      }
    );
  };

  const deleteVegetable = () => {
    if (!name) {
      Alert.alert('Error', 'Please enter the name of the product to delete.');
      return;
    }

    db.transaction(
      tx => {
        tx.executeSql(
          'DELETE FROM products WHERE p_name = ?',
          [name],
          () => {
            console.log(`Product with name ${name} deleted successfully`);
            setName('');
            setPrice('');
            setStock('');
            Alert.alert('Success', `Product with name ${name} deleted successfully`);
          },
          (_, error) => {
            console.error('Error deleting product', error);
            Alert.alert('Error', 'Failed to delete product. Please try again later.');
          }
        );
      }
    );
  };

  return (
    <ImageBackground source={require('./assets/add.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Update or Delete Product</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="New Price"
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="New Stock"
            value={stock}
            onChangeText={text => setStock(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Update" onPress={updateVegetable} />
          <View style={styles.buttonGap} />
          <Button title="Delete" onPress={deleteVegetable} />
        </View>
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
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGap: {
    width: 20,
  },
});
