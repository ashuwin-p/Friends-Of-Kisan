import React from 'react';
import { View, Button, Text, StyleSheet, ImageBackground } from 'react-native';

export default function FramFreshChat({ navigation }) {
  return (
    <ImageBackground source={require('./assets/farming.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Farm Fresh Repository</Text>
        <Button
          title="ADD VEGETABLES"
          onPress={() => navigation.navigate('AddVegetable')}
          titleStyle={styles.buttonText}
          buttonStyle={styles.addButton}
        />
        <View style={styles.gap} />
        <Button
          title="VIEW VEGETABLES"
          onPress={() => navigation.navigate('ViewVegetables')}
          titleStyle={styles.buttonText}
          buttonStyle={styles.viewButton}
        />
        <View style={styles.gap} />
        <Button
          title="UPDATE VEGETABLES"
          onPress={() => navigation.navigate('UpdateVegetable')}
          titleStyle={styles.buttonText}
          buttonStyle={styles.updateButton}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 120,
    color: '#fff', // White color
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff', // White color
  },
  addButton: {
    borderRadius: 50, // Make the button round
    backgroundColor: 'rgba(0, 123, 255, 0.8)', // Blue color with opacity
    paddingHorizontal: 40, // Add horizontal padding to the button
    paddingVertical: 15, // Add vertical padding to the button
  },
  viewButton: {
    borderRadius: 50, // Make the button round
    backgroundColor: 'rgba(35, 138, 116, 0.8)', // Green color with opacity
    paddingHorizontal: 40, // Add horizontal padding to the button
    paddingVertical: 15, // Add vertical padding to the button
  },
  updateButton: {
    borderRadius: 50, // Make the button round
    backgroundColor: 'rgba(220, 53, 69, 0.8)', // Red color with opacity
    paddingHorizontal: 40, // Add horizontal padding to the button
    paddingVertical: 15, // Add vertical padding to the button
  },
  gap: {
    height: 28,
  },
});