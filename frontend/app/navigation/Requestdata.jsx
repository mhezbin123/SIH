import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function RequestData({ route }) {
  const navigation = useNavigation();

  // Form states
  const [date, setDate] = useState('');
  const [requesteeName, setRequesteeName] = useState('');
  const [designation, setDesignation] = useState('');
  const [requesteeId, setRequesteeId] = useState('');
  const [organization, setOrganization] = useState('');
  const [dataRequested, setDataRequested] = useState('');

  const handleCancel = () => {
    Alert.alert('Request Cancelled');
  };

  const handleSubmit = () => {
    if (date && requesteeName && designation && requesteeId && organization && dataRequested) {
      Alert.alert('Request Submitted Successfully');

      // Simulating adding the new request to notifications (update the actual logic as per your requirement)
      const newRequest = {
        date,
        heading: 'Data Request',
        requestor: 'Me',
        designation,
        organization,
        type: dataRequested,
        state: 'Pending',
      };

      route.params.addNewSentRequest(newRequest);

      // Reset form
      setDate('');
      setRequesteeName('');
      setDesignation('');
      setRequesteeId('');
      setOrganization('');
      setDataRequested('');

      navigation.goBack();
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#333" size={25} />
        </TouchableOpacity>

        <Text style={styles.heading}>Request Data</Text>

        {/* Scrollable form fields */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Enter Date"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Requestee Name</Text>
          <TextInput
            style={styles.input}
            value={requesteeName}
            onChangeText={setRequesteeName}
            placeholder="Enter Requestee Name"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Designation</Text>
          <TextInput
            style={styles.input}
            value={designation}
            onChangeText={setDesignation}
            placeholder="Enter Designation"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Requestee ID</Text>
          <TextInput
            style={styles.input}
            value={requesteeId}
            onChangeText={setRequesteeId}
            placeholder="Enter Requestee ID"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Organization</Text>
          <TextInput
            style={styles.input}
            value={organization}
            onChangeText={setOrganization}
            placeholder="Enter Organization"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data Requested</Text>
          <TextInput
            style={styles.input}
            value={dataRequested}
            onChangeText={setDataRequested}
            placeholder="Enter Data Requested"
            placeholderTextColor="#888"
          />
        </View>

        {/* Fixed Bottom Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the page to scroll fully
    paddingBottom: 100, // Padding to ensure the buttons are scrollable
  },
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40, // Added space above the back button
    backgroundColor: '#f8f9fa',
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Space below the back button
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontFamily: 'montregular', // Regular font for labels
    color: '#666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    fontFamily: 'montlight', // Light font for input text
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff', // White for cancel button
    borderWidth: 1,
    borderColor: '#000', // Black border
    alignItems: 'center',
    marginRight: 10,
  },
  submitButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#000', // Black for submit button
    alignItems: 'center',
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#000', // Black text for cancel button
    fontSize: 16,
    fontFamily: 'montbold',
  },
  submitButtonText: {
    color: '#fff', // White text for submit button
    fontSize: 16,
    fontFamily: 'montbold',
  },
});
