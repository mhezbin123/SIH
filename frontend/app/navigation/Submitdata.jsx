import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert,TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function PatientForm() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const navigation = useNavigation();

  // Function to submit the patient form
  const onSubmit = async (data) => {
    const newData = {
      newData: {
        uid: data.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        age: parseInt(data.age, 10),
        sex: data.sex,
        startDate: data.startDate,
        endDate: data.endDate,
        status: data.status,
        description: data.description,
      }
    };

    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('https://sih-backend-tgt0.onrender.com/api/v1/data/', {
        method: 'POST',
        headers: {
          'authorization': `${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      const responseData = await response.json();

      if (response.ok) {
        Alert.alert('Data Submitted', 'Patient data has been submitted successfully.');
      } else {
        Alert.alert('Submission Failed', responseData.message || 'An error occurred.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to submit data.');
      console.error(error);
    }

    reset();
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#333" size={25} />
        </TouchableOpacity>
      <Text style={styles.heading}>Patient Information Form</Text>

      <Controller
        control={control}
        name="uid"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="UID"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />
      {errors.uid && <Text style={styles.error}>UID is required.</Text>}

      <Controller
        control={control}
        name="firstName"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />
      {errors.firstName && <Text style={styles.error}>First name is required.</Text>}

      <Controller
        control={control}
        name="lastName"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />

      <Controller
        control={control}
        name="age"
        defaultValue=""
        rules={{ required: true, min: 0 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />
      {errors.age && <Text style={styles.error}>Age is required and must be 0 or more.</Text>}

      <Controller
        control={control}
        name="sex"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Sex"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />

      <Controller
        control={control}
        name="startDate"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Start Date (YYYY-MM-DD)"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />
      {errors.startDate && <Text style={styles.error}>Start date is required.</Text>}

      <Controller
        control={control}
        name="endDate"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="End Date (YYYY-MM-DD)"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />

      <Controller
        control={control}
        name="status"
        defaultValue=""
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Status (e.g., active, cured, dead)"
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />
      {errors.status && <Text style={styles.error}>Status is required.</Text>}

      <Controller
        control={control}
        name="description"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Description"
            multiline
            numberOfLines={4}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#888"
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} color="black" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
  },
  heading: {
    fontFamily: 'montbold', // Your custom font
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 5,
    color: 'black',
    marginBottom: 15,
    fontFamily: 'montbold', // Your custom font
  },
  error: {
    color: '#ff4d4d',
    fontFamily: 'montbold', // Your custom font
    marginBottom: 10,
  },
});