// database.js

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sample.db');

// Function to create tables and insert sample data if tables are empty
const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('DROP TABLE IF EXISTS Farmers', [], (tx, result) => {
        console.log('Farmers table dropped');
      });
      tx.executeSql('DROP TABLE IF EXISTS Consumers', [], (tx, result) => {
        console.log('Consumers table dropped');
      });
      tx.executeSql('DROP TABLE IF EXISTS Products', [], (tx, result) => {
        console.log('Products table dropped');
      });
      tx.executeSql('DROP TABLE IF EXISTS Stock', [], (tx, result) => {
        console.log('Stock table dropped');
      });

      // After dropping tables, create new tables and insert sample data
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Farmers (
          Farmer_id INTEGER PRIMARY KEY AUTOINCREMENT,
          Farmer_Name TEXT,
          Phone_Number TEXT,
          Location TEXT,
          Password TEXT
        )`
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Consumers (
          Consumer_id INTEGER PRIMARY KEY AUTOINCREMENT,
          Consumer_Name TEXT,
          Phone_Number TEXT,
          Location TEXT,
          Password TEXT
        )`
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Products (
          Product_id INTEGER PRIMARY KEY AUTOINCREMENT,
          Product_Name TEXT
        )`
      );
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Stock (
          Stock_id INTEGER PRIMARY KEY AUTOINCREMENT,
          Farmer_id INTEGER,
          Product_id INTEGER,
          Price REAL,
          Quantity INTEGER,
          FOREIGN KEY (Farmer_id) REFERENCES Farmers (Farmer_id),
          FOREIGN KEY (Product_id) REFERENCES Products (Product_id)
        )`
      );

      // Insert sample data into Farmers table
      const farmerNames = ['Ramesh', 'Suresh', 'Krishna', 'Manjunath', 'Rajesh', 'Ganesh', 'Senthil', 'Arjun', 'Prakash', 'Vijay'];
      const farmerLocations = ['Chennai', 'Bangal ore', 'Hyderabad', 'Coimbatore', 'Mysore', 'Kochi', 'Trivandrum', 'Madurai', 'Tirupati', 'Pondicherry'];
      for (let i = 0; i < 10; i++) {
        tx.executeSql(
          'INSERT INTO Farmers (Farmer_Name, Phone_Number, Location, Password) VALUES (?, ?, ?, ?)',
          [farmerNames[i], `637442804${i}`, farmerLocations[i], `password${i + 1}`]
        );
      }

      // Insert sample data into Consumers table
      const consumerNames = ['Meera', 'Saravanan', 'Deepa', 'Manju', 'Nithya', 'Rajeshwari', 'Surya', 'Anusha', 'Kumar', 'Priya'];
      const consumerLocations = ['Chennai', 'Bangalore', 'Hyderabad', 'Coimbatore', 'Mysore', 'Kochi', 'Trivandrum', 'Madurai', 'Tirupati', 'Pondicherry'];
      for (let i = 0; i < 10; i++) {
        tx.executeSql(
          'INSERT INTO Consumers (Consumer_Name, Phone_Number, Location, Password) VALUES (?, ?, ?, ?)',
          [consumerNames[i], `123456789${i}`, consumerLocations[i], `password${i + 1}`]
        );
      }

      // Insert sample data into Products table
      const products = ['Tomato', 'Potato', 'Onion', 'Carrot', 'Cabbage', 'Cauliflower', 'Brinjal', 'Capsicum', 'Spinach', 'Broccoli'];
      for (let i = 0; i < 10; i++) {
        tx.executeSql(
          'INSERT INTO Products (Product_Name) VALUES (?)',
          [products[i]]
        );
      }

      // Insert sample data into Stock table
      for (let i = 0; i < 10; i++) {
        tx.executeSql(
          'INSERT INTO Stock (Farmer_id, Product_id, Price, Quantity) VALUES (?, ?, ?, ?)',
          [i + 1, i + 1, (i + 1) * 2.5, Math.floor(Math.random() * 50) + 50] // Assigning some reasonable prices and quantities
        );
      }
      // Insert sample data into Stock table
      const stockItems = [
        { farmerId: 1, productId: 1, price: 2.5, quantity: 50 },
        { farmerId: 2, productId: 2, price: 5, quantity: 60 },
        { farmerId: 3, productId: 3, price: 3, quantity: 40 },
        { farmerId: 4, productId: 4, price: 4.5, quantity: 70 },
        { farmerId: 5, productId: 5, price: 3.2, quantity: 55 },
        { farmerId: 6, productId: 6, price: 2, quantity: 45 },
        { farmerId: 7, productId: 7, price: 3.8, quantity: 80 },
        { farmerId: 8, productId: 8, price: 4.7, quantity: 65 },
        { farmerId: 9, productId: 9, price: 2.9, quantity: 75 },
        { farmerId: 10, productId: 10, price: 3.5, quantity: 85 },
        { farmerId: 1, productId: 2, price: 4.2, quantity: 90 },
        { farmerId: 2, productId: 3, price: 2.7, quantity: 55 },
        { farmerId: 3, productId: 4, price: 5.1, quantity: 65 },
        { farmerId: 4, productId: 5, price: 3.6, quantity: 70 },
        { farmerId: 5, productId: 6, price: 2.8, quantity: 40 },
        { farmerId: 6, productId: 7, price: 4.0, quantity: 75 },
        { farmerId: 7, productId: 8, price: 3.3, quantity: 80 },
        { farmerId: 8, productId: 9, price: 2.4, quantity: 95 },
        { farmerId: 9, productId: 10, price: 3.9, quantity: 60 },
        { farmerId: 10, productId: 1, price: 2.3, quantity: 50 },
        { farmerId: 1, productId: 3, price: 4.8, quantity: 85 },
        { farmerId: 2, productId: 4, price: 3.5, quantity: 45 },
        { farmerId: 3, productId: 5, price: 2.6, quantity: 70 },
        { farmerId: 4, productId: 6, price: 4.1, quantity: 60 },
        { farmerId: 5, productId: 7, price: 3.0, quantity: 50 },
        { farmerId: 6, productId: 8, price: 5.0, quantity: 55 },
        { farmerId: 7, productId: 9, price: 2.1, quantity: 80 },
        { farmerId: 8, productId: 10, price: 3.7, quantity: 65 },
        { farmerId: 9, productId: 1, price: 2.9, quantity: 75 },
        { farmerId: 10, productId: 2, price: 4.3, quantity: 70 },
        { farmerId: 1, productId: 4, price: 3.2, quantity: 80 },
        { farmerId: 2, productId: 5, price: 5.2, quantity: 45 },
        { farmerId: 3, productId: 6, price: 2.7, quantity: 65 },
        { farmerId: 4, productId: 7, price: 4.5, quantity: 55 },
        { farmerId: 5, productId: 8, price: 3.6, quantity: 90 },
        { farmerId: 6, productId: 9, price: 2.4, quantity: 70 },
        { farmerId: 7, productId: 10, price: 3.9, quantity: 80 },
        { farmerId: 8, productId: 1, price: 2.8, quantity: 50 },
        { farmerId: 9, productId: 2, price: 4.0, quantity: 65 },
        { farmerId: 10, productId: 3, price: 3.1, quantity: 55 },
        { farmerId: 1, productId: 5, price: 5.0, quantity: 40 },
        { farmerId: 2, productId: 6, price: 2.3, quantity: 75 },
        { farmerId: 3, productId: 7, price: 4.2, quantity: 70 },
        { farmerId: 4, productId: 8, price: 3.6, quantity: 85 },
        { farmerId: 5, productId: 9, price: 2.9, quantity: 60 },
        { farmerId: 6, productId: 10, price: 4.7, quantity: 95 },
        { farmerId: 7, productId: 1, price: 3.5, quantity: 65 },
        { farmerId: 8, productId: 2, price: 2.6, quantity: 70 },
        { farmerId: 9, productId: 3, price: 4.1, quantity: 50 },
        { farmerId: 10, productId: 4, price: 2.8, quantity: 80 },
      ];

      for (let i = 0; i < 50; i++) {
        const item = stockItems[i];
        tx.executeSql(
          'INSERT INTO Stock (Farmer_id, Product_id, Price, Quantity) VALUES (?, ?, ?, ?)',
          [item.farmerId, item.productId, item.price, item.quantity]
        );
      }

    }, (error) => {
      console.log('Transaction error:', error);
      reject(error);
    }, () => {
      console.log('Transaction success');
      resolve();
    });
  });
};

export { db, initializeDatabase };
