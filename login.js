import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Modal, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Farmer'); // Default value is Farmer
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password, userType);
    if (userType === 'Consumer') {
      navigation.navigate('EMarketplace');
    } else {
      navigation.navigate('HomeScreen');
    }
  };

  const handleSignUp = () => {
    // Navigate to SignUpScreen
    navigation.navigate('SignUpScreen');
  };

  const handleSelectUserType = (selectedType) => {
    setUserType(selectedType);
    setShowModal(false);
  };

  return (
    <ImageBackground source={require('./assets/ssbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Friends of Kisaan</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <View style={styles.gap} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.gap} />
          
          <Button
            title="Login"
            onPress={handleLogin}
            titleStyle={styles.buttonText}
            buttonStyle={styles.addButton}
          />
          <View style={styles.gap} />
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <Modal visible={showModal} animationType="slide">
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleSelectUserType('Farmer')}>
                <Text>Farmer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => handleSelectUserType('Consumer')}>
                <Text>Consumer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalItem} onPress={() => setShowModal(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    marginBottom: 140,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#ffbf00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  gap: {
    height: 10, // Adjust the height as needed
  },
});

export default LoginScreen;
