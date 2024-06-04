import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FarmersScreen = () => {
  const navigation = useNavigation();

  const navigateToFarmFreshChat = () => {
    navigation.navigate('FarmFreshChat');
  };

  const navigateToCultiBot = () => {
    navigation.navigate('Cultibot');
  };

  return (
    <ImageBackground source={require('./assets/lk.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Friends of Kisaan</Text>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/logoo.jpg')} style={styles.profileImage} />
        </View>
        <TouchableOpacity style={styles.chatAppButton} onPress={navigateToFarmFreshChat}>
          <Text style={styles.buttonText}>FarmFresh Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatbotButton} onPress={navigateToCultiBot}>
          <Text style={styles.buttonText}>Culti-Bot</Text>
        </TouchableOpacity>
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
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  imageContainer: {
    width: 150,  // Adjust as needed
    height: 150, // Adjust as needed
    borderRadius: 75, // Half of width and height to make it circular
    overflow: 'hidden', // Ensure image is clipped to the container's border
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensure the image covers the entire container
  },
  chatAppButton: {
    width: 300,
    backgroundColor: '#FDA403', // Yellow color
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatbotButton: {
    width: 300,
    backgroundColor: '#87A922', 
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default FarmersScreen;
