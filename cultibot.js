import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import dataset from './dataset';

const Cultibot = () => {
  const [input, setInput] = useState('');
  const [showSchemes, setShowSchemes] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi!', fromUser: false },
    { type: 'buttons', options: ['Loan details', 'Loan waiver details', 'All Schemes'], fromUser: false }
  ]);

  const simulateResponse = (inputText) => {
    const lowerInputText = inputText.toLowerCase();
    for (const topic in dataset) {
      const { keywords, response } = dataset[topic];
      if (keywords && keywords.some(keyword => lowerInputText.includes(keyword))) {
        return response;
      }
    }
    return dataset.default && dataset.default.response ? dataset.default.response : 'I am sorry, I do not understand. Can you please rephrase your question?';
  };
  const handleSendMessage = (message) => {
    // Check if the message matches any keyword or keyword inquiry in the dataset
    const matchedKeyword = Object.keys(dataset).find(keyword => {
      const normalizedKeyword = keyword.toLowerCase();
      const normalizedMessage = message.toLowerCase();
      // Check if the message matches the keyword exactly or contains "what is" or "explain about" followed by the keyword
      return normalizedMessage === normalizedKeyword ||
        normalizedMessage.includes(`what is ${normalizedKeyword}`) ||
        normalizedMessage.includes(`explain ${normalizedKeyword}`) ||
        normalizedMessage.includes(`explain about ${normalizedKeyword}`);
    });


    if (matchedKeyword) {
      // Retrieve the corresponding response from the dataset
      const response = dataset[matchedKeyword].response;
      setMessages([...messages, { text: response, fromUser: false }]);
    } else if (message === 'All Schemes') {
      const schemesList = [
        "Pradhan Mantri Fasal Bima Yojana",
        "Kisan Credit Card Scheme",
        "Pradhan Mantri Kisan Samman Nidhi Yojana",
        "National Bank for Agriculture and Rural Development (NABARD) Loans",
        "Agricultural Gold Loan",
        "Interest Subvention Scheme for Short Term Crop Loans",
        "Rashtriya Krishi Vikas Yojana (RKVY)",
        "Pradhan Mantri Kisan Credit Card (PM-KCC) Scheme",
        "Pashu Kisan Credit Card (PKCC) Scheme"
      ];
      const schemesOptions = schemesList.map(scheme => ({
        text: scheme,
        fromUser: false,
        type: 'scheme'
      }));
      setMessages([...messages, ...schemesOptions]);
    } else if (message === 'Loan details') {
      setMessages([...messages, { text: 'Please select Loan details:', fromUser: false, type: 'buttons', options: ['Land size', 'Loan purpose', 'Type of farming'] }]);
    } else if (message === 'Land size') {
      setMessages([...messages, { text: 'Please select land size:', fromUser: false, type: 'buttons', options: ['Landless Farmer', 'Small Landholder (Upto 2 hectares)', 'Medium Landholder (2-5 hectares)', 'Large Landholder (Above 5 hectares)'] }]);
    } else if (message === 'Loan purpose') {
      setMessages([...messages, { text: 'Please select loan purpose:', fromUser: false, type: 'buttons', options: ['Land Purchase/Improvement', 'Seed & Fertilizer Purchase', 'Livestock Purchase', 'Post-Harvest Infrastructure'] }]);
    } else if (message === 'Type of farming') {
      setMessages([...messages, { text: 'Please select a farming type:', fromUser: false, type: 'buttons', options: ['Subsistence Farming', 'Commercial Farming', 'Plantation Farming', 'Horticulture'] }]);
    } else if (message === 'Loan waiver details') {
      const loanWaiverDetails = dataset['Loan Waiver Details'].response;
      setMessages([...messages, { text: loanWaiverDetails, fromUser: false }]);
    } else if (dataset[message]) {
      const schemeDetails = dataset[message].response;
      setMessages([...messages, { text: schemeDetails, fromUser: false }]);
    } else if (message === 'Land Purchase/Improvement' || message === 'Seed & Fertilizer Purchase' || message === 'Livestock Purchase' || message === 'Post-Harvest Infrastructure') {
      setShowSchemes(true);
      setMessages([...messages, { text: 'Please select an option:', fromUser: false, type: 'buttons', options: dataset[message].options }]);
    } else {
      const updatedMessages = [...messages, { text: message, fromUser: true }];
      const response = simulateResponse(message);
      setMessages([...updatedMessages, { text: response, fromUser: false }]);
    }

    setInput('');
  };



  const renderSchemesButtons = () => {
    if (!showSchemes) return null;
    const schemes = Object.keys(dataset).filter(topic => topic !== 'default');
    return (
      <>
        {schemes.map((scheme, index) => (
          <TouchableOpacity key={index} onPress={() => handleSendMessage(scheme)} style={[styles.schemeButton, styles.schemeNameButton]}> {/* Added styles.schemeNameButton */}
            <Text style={[styles.buttonText, styles.schemeButtonText]}>{scheme}</Text> {/* Added styles.schemeButtonText */}
          </TouchableOpacity>
        ))}
      </>
    );
  };

  const renderMessage = (message, index) => {
    if (message.type === 'buttons') {
      return (
        <View key={index} style={{ flexDirection: 'column', alignItems: 'flex-start', margin: 5 }}>
          <View style={{ backgroundColor: '#F1F0F0AA', borderRadius: 15, padding: 10, maxWidth: '70%' }}>
            <Text style={{ marginBottom: 10, color: 'black' }}>How can I help you?</Text>
            <Text style={{ marginBottom: 10, color: 'black' }}>{message.text}</Text>
            {message.options.map((option, optionIndex) => (
              <TouchableOpacity key={optionIndex} onPress={() => handleSendMessage(option)} style={{ borderRadius: 25, backgroundColor: '#3F91FF', paddingVertical: 10, paddingHorizontal: 20, marginTop: 5 }}>
                <Text style={{ color: 'white' }}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {renderSchemesButtons()}
        </View>
      );
    } else if (message.type === 'scheme') {
      return (
        <TouchableOpacity key={index} onPress={() => handleSendMessage(message.text)} style={{ borderRadius: 25, backgroundColor: '#3F91FF', paddingVertical: 10, paddingHorizontal: 20, marginTop: 5 }}>
          <Text style={{ color: 'white' }}>{message.text}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View key={index} style={{ flexDirection: 'row', justifyContent: message.fromUser ? 'flex-end' : 'flex-start', margin: 5 }}>
          <Text style={{ backgroundColor: message.fromUser ? '#FDA403' : '#F1F0F0AA', borderRadius: 15, padding: 10, maxWidth: '70%', color: message.fromUser ? 'white' : 'black' }}>{message.text}</Text>
        </View>
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  let scrollViewRef;

  return (
    <ImageBackground source={require("./assets/ssn.jpg")} style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerTitle}>DISCLAIMER:</Text>
          <Text style={styles.disclaimerText}>This is an experimental chatbot to help farmers reduce their financial burdens, but exposing them to new loans, loan waiver schemes, and government schemes. The messages displayed below are based on datasets given, verify the message manually.</Text>
        </View>
        <ScrollView
          ref={ref => (scrollViewRef = ref)}
          style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        >
          {messages.map(renderMessage)}
        </ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
          <TextInput
            style={{ flex: 1, backgroundColor: '#e0e0e0', borderRadius: 25, padding: 10, marginBottom: 10 }}
            placeholder="Type your message..."
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <TouchableOpacity onPress={() => handleSendMessage(input)} style={{ borderRadius: 25, backgroundColor: '#3F91FF', paddingVertical: 10, paddingHorizontal: 20, marginLeft: 10, marginBottom: 10 }}>
            <Text style={{ color: 'white' }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  schemeButton: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 5
  },
  buttonText: {
    color: 'white'
  },
  schemeNameButton: { // Added style for scheme name buttons
    backgroundColor: 'yellow', // Scheme name buttons will have a yellow background
  },
  schemeButtonText: { // Added style for scheme name button text
    color: 'black', // Scheme name button text color
  },
  disclaimerContainer: {
    backgroundColor: 'rgba(0, 191, 255, 0.5)', // Changed to red with transparency
    padding: 10,
    margin: 10,
    borderRadius: 15,
    textAlign: 'center',
    color: 'white'
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  disclaimerText: {
    fontSize: 14,
    color: 'white',
  }
};

export default Cultibot;