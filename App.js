import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FarmersScreen from './FarmersScreen';
import ConsumersScreen from './ConsumersScreen';
import Esandhai from './esandhai';
import Cultibot from './cultibot'; // Import the Cultibot component
import AddVegetable from './AddVegetable';
import ViewVegetables from './ViewVegetables';
import FarmFreshChat from './FarmFreshChat';
import UpdateVegetable from './UpdateVegetable'; // Import the UpdateVegetable component
import HomeScreen from './Mainhome'
import LoginScreen from './login';
import SignUpScreen from './signup';
const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: { backgroundColor: '#114232' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'HomeSreen',
            headerStyle: { backgroundColor: '#6420AA' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'SignUpScreen',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Farmers"
          component={FarmersScreen}
          options={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Consumers"
          component={ConsumersScreen}
          options={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="E-Sandhai"
          component={Esandhai}
          options={{
            title: 'E-Sandhai',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Cultibot" // Add a screen for Cultibot component
          component={Cultibot}
          options={{
            title: 'Cultibot',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="FarmFreshChat"
          component={FarmFreshChat}
          options={{ title: 'FarmHome' }}
        />
        <Stack.Screen
          name="AddVegetable"
          component={AddVegetable}
          options={{ title: 'Add Vegetable' }}
        />
        <Stack.Screen
          name="ViewVegetables"
          component={ViewVegetables}
          options={{ title: 'View Vegetables' }}
        />
        <Stack.Screen
          name="UpdateVegetable"
          component={UpdateVegetable} // Register the UpdateVegetable component
          options={{ title: 'Update Vegetable' }} // Set title for the screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
