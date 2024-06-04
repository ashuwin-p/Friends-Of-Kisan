import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Linking, ImageBackground, Animated, Alert } from 'react-native';
import { db, initializeDatabase } from './database';
import { Picker } from '@react-native-picker/picker';

const backgroundImage = require('./assets/bg1.png');  
const Esandhai = () => {
  const [stock, setStock] = useState([]);
  const [productNameFilter, setProductNameFilter] = useState('');
  const [farmerLocationFilter, setFarmerLocationFilter] = useState('');
  const [productNames, setProductNames] = useState([]);
  const [farmerLocations, setFarmerLocations] = useState([]);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    // Call initializeDatabase function to create tables and insert sample data
    initializeDatabase(db);
    fetchData();
    fetchFilterData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchFilterData = () => {
    // Fetch existing product names and farmer locations from the database
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT DISTINCT Product_Name FROM Products',
        [],
        (_, { rows }) => {
          const productNamesArray = [];
          for (let i = 0; i < rows.length; i++) {
            productNamesArray.push(rows.item(i).Product_Name);
          }
          setProductNames(productNamesArray);
        }
      );
      tx.executeSql(
        'SELECT DISTINCT Location FROM Farmers',
        [],
        (_, { rows }) => {
          const locationsArray = [];
          for (let i = 0; i < rows.length; i++) {
            locationsArray.push(rows.item(i).Location);
          }
          setFarmerLocations(locationsArray);
        }
      );
    });
  };

  const fetchData = () => {
    let query = `
      SELECT Stock.Farmer_id, Stock.Product_id, Stock.Price, Stock.Quantity, Farmers.Farmer_Name, Farmers.Phone_Number, Products.Product_Name 
      FROM Stock 
      JOIN Farmers ON Stock.Farmer_id = Farmers.Farmer_id 
      JOIN Products ON Stock.Product_id = Products.Product_id
    `;

    // Add filters if provided
    if (productNameFilter) {
      query += ` WHERE Products.Product_Name LIKE '%${productNameFilter}%'`;
    }
    if (farmerLocationFilter) {
      query += `${productNameFilter ? ' AND' : ' WHERE'} Farmers.Location LIKE '%${farmerLocationFilter}%'`;
    }

    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, { rows }) => {
          const fetchedStock = [];
          for (let i = 0; i < rows.length; i++) {
            fetchedStock.push(rows.item(i));
          }
          setStock(fetchedStock);
        }
      );
    });
  };

  const handleCardPress = (phoneNumber) => {
    Alert.alert(
      'Choose a Contact Method',
      '',
      [
        {
          text: 'Call',
          onPress: () => {
            const phoneNumberUrl = `tel:${phoneNumber}`;
            Linking.openURL(phoneNumberUrl);
          },
          style: 'default',
        },
        {
          text: 'WhatsApp',
          onPress: () => {
            // Replace '91' with the country code if needed
            const whatsappUrl = `https://wa.me/91${phoneNumber}`;
            Linking.openURL(whatsappUrl);
          },
          style: 'default',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const getProductCardColor = (productName) => {
    const colorMap = {
      'Carrot': '#ffbfaa',
      'Tomato': '#ff8c8c',
      'Potato': '#cc9966',
      'Cabbage': '#99ff99',
      'Spinach': '#80ff80',
      'Cauliflower': '#ffffb3',
      'Brinjal': '#bf80ff',
      'Capsicum': '#ff944d',
      'Broccoli': '#33cc33',
      'Onion': '#ffcc66',
    };
    return colorMap[productName] || '#f9f9f9';
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>e - சந்தை</Text>
          <View style={styles.filterContainer}>
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Product Name</Text>
              <Picker
                style={styles.filterPicker}
                selectedValue={productNameFilter}
                onValueChange={(itemValue) => setProductNameFilter(itemValue)}
              >
                <Picker.Item label="Select product name" value="" />
                {productNames.map((productName, index) => (
                  <Picker.Item key={index} label={productName} value={productName} />
                ))}
              </Picker>
            </View>
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Farmer's Location</Text>
              <Picker
                style={styles.filterPicker}
                selectedValue={farmerLocationFilter}
                onValueChange={(itemValue) => setFarmerLocationFilter(itemValue)}
              >
                <Picker.Item label="Select farmer's location" value="" />
                {farmerLocations.map((location, index) => (
                  <Picker.Item key={index} label={location} value={location} />
                ))}
              </Picker>
            </View>
            <Button title="Apply Filters" onPress={fetchData} />
          </View>
          <View style={styles.callButton}>
            <Text style={[styles.callButtonText, isBlinking ? styles.blinkingText : null]}>Click to Contact</Text>
          </View>
        </View>
        {stock.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.cardContainer, { backgroundColor: getProductCardColor(item.Product_Name) }]}
            onPress={() => handleCardPress(item.Phone_Number)}
          >
            <View style={styles.card}>
              <View style={styles.cardRow}>
                <Text style={styles.label}>Farmer Name</Text>
                <Text style={styles.value}>{item.Farmer_Name}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.label}>Product Name</Text>
                <Text style={styles.value}>{item.Product_Name}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.value}>{'\u20B9'}{item.Price}</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.label}>Quantity</Text>
                <Text style={styles.value}>{item.Quantity}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 35,
    color: '#58355E',
    backgroundColor: '#7AE7C7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  filterContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  filterSection: {
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  filterPicker: {
    fontSize: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ff5722',
    borderRadius: 5,
    marginRight: 10,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    width: '96%',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  value: {
    fontWeight: 'bold',
    flex: 2,
    color: 'black',
    fontSize: 16,
  },
  callButton: {
    backgroundColor: '#ff5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  blinkingText: {
    opacity: 0,
  },
});

export default Esandhai;
