import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function MyAccount() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#333" size={25} />
        </TouchableOpacity>

        <Text style={styles.heading}>My Account</Text>

        {/* Profile Photo */}
        <View style={styles.profilePhotoContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/120' }} // Temporary profile image
            style={styles.profilePhoto}
          />
        </View>

        {/* User Information Fields */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoText}>John Doe</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Designation</Text>
            <Text style={styles.infoText}>Software Engineer</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Organization</Text>
            <Text style={styles.infoText}>Tech Solutions</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>User ID</Text>
            <Text style={styles.infoText}>123456</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Organization ID</Text>
            <Text style={styles.infoText}>987654</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date of Birth</Text>
            <Text style={styles.infoText}>01/01/1990</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email ID</Text>
            <Text style={styles.infoText}>johndoe@example.com</Text>
          </View>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the page to scroll fully
  },
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 40, // Increased space above the back button
    backgroundColor: '#f8f9fa', // Light background
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5, // Increased space above the back button
    marginBottom: 10, // Space below the back button
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
    marginTop: 5,
  },
  profilePhotoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the profile image circular
    borderColor: '#333',
    borderWidth: 1,
  },
  infoContainer: {
    marginBottom: 20,
    marginTop: -10,
  },
  infoItem: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontFamily: 'montbold', // Bold font for the labels
    color: '#333',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'montregular', // Regular font for the text
    color: '#555',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0', // Light border around the fields
  },
  logoutButton: {
    backgroundColor: '#000000', // Black background for the logout button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: -20,
  },
  logoutButtonText: {
    fontSize: 18,
    fontFamily: 'montbold', // Bold font for button text
    color: '#ffffff', // White text for contrast
  },
});
