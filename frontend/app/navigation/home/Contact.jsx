import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name && email && message) {
      Alert.alert('Success', 'Your message has been sent!');
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navigation to the previous screen
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
          <Ionicons name={"arrow-back-outline"} color={"#333"} size={25} />
        </TouchableOpacity>

        <Text style={styles.heading}>Contact Us</Text>

        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Tony Stark"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="tony.stark@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Your Message</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Write your message here"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={5}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the scroll covers the entire page
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F8F9FA', // Soft light background for modern look
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10, // Space below the back button
  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'left',
    color: '#333', // Darker gray for the heading
    fontFamily: 'montbold', // Using Montserrat for clean and modern look
  },
  label: {
    fontSize: 16,
    color: '#585858', // Slightly darker shade for labels
    marginBottom: 5,
    marginLeft: 5,
    fontFamily: 'montmedium', // Consistent Montserrat font
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10, // Rounded corners
    borderWidth: 1,
    borderColor: '#A0A0A0', // Light gray border for modern minimalism
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0,
    fontFamily: 'montregular', // Modern font for inputs
  },
  textArea: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 0,
    height: 120,
    textAlignVertical: 'top',
    fontFamily: 'montregular',
  },
  button: {
    backgroundColor: '#000000', // Black button for clean contrast
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10, // Fully rounded button
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#ffffff', // White text for contrast
    fontSize: 20,
    fontFamily: 'montbold',
  },
});
