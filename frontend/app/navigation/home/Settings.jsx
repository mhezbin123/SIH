import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDataSharingEnabled, setIsDataSharingEnabled] = useState(false);
  const [unitSystem, setUnitSystem] = useState('Metric');

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  const toggleNotifications = () => {
    setIsNotificationsEnabled(previousState => !previousState);
  };

  const toggleDataSharing = () => {
    setIsDataSharingEnabled(previousState => !previousState);
  };

  const switchUnitSystem = () => {
    setUnitSystem(previousUnit => (previousUnit === 'Metric' ? 'Imperial' : 'Metric'));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f8f9fa' }]}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#333" size={25} />
        </TouchableOpacity>

        <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#333' }]}>Settings</Text>

        {/* Dark Mode */}
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#4895EF' }}
            thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          />
        </View>

        {/* Notifications */}
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Enable Notifications</Text>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#767577', true: '#4895EF' }}
            thumbColor={isNotificationsEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>

        {/* Data Sharing */}
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Data Sharing</Text>
          <Switch
            value={isDataSharingEnabled}
            onValueChange={toggleDataSharing}
            trackColor={{ false: '#767577', true: '#4895EF' }}
            thumbColor={isDataSharingEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>

        {/* Unit System */}
        <View style={[styles.settingItem, { backgroundColor: isDarkMode ? '#1F1F1F' : '#ffffff', borderColor: isDarkMode ? '#333' : '#e2e8f0' }]}>
          <Text style={[styles.settingText, { color: isDarkMode ? '#fff' : '#333' }]}>Unit System</Text>
          <TouchableOpacity onPress={switchUnitSystem}>
            <Text style={[styles.unitText, { color: isDarkMode ? '#fff' : '#000000' }]}>{unitSystem}</Text>
          </TouchableOpacity>
        </View>

        {/* Account Settings */}
        <TouchableOpacity onPress={() => navigation.navigate('Myaccount')}
          style={[styles.accountButton, { backgroundColor: isDarkMode ? '#000' : '#000', borderColor: isDarkMode ? '#fff' : '#000' }]}
        >
          <Text style={[styles.accountButtonText, { color: isDarkMode ? '#fff' : '#fff' }]}>
            Account Settings
          </Text>
        </TouchableOpacity>

        {/* Log Out */}
        <TouchableOpacity style={styles.linkButton}>
          <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#000000' }]}>Log Out</Text>
        </TouchableOpacity>

        {/* Privacy Policy */}
        <TouchableOpacity style={styles.linkButton}>
          <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#000000' }]}>Privacy Policy</Text>
        </TouchableOpacity>

        {/* Terms of Service */}
        <TouchableOpacity style={styles.linkButton}>
          <Text style={[styles.linkText, { color: isDarkMode ? '#fff' : '#000000' }]}>Terms of Service</Text>
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
    paddingTop: 25, // Reduced padding to reduce space above the back button
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // Reduced marginTop to 0 to minimize space above back button
    marginBottom: 10, // Reduced space below the back button
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  settingText: {
    fontSize: 18,
    fontFamily: 'montregular', // Regular font for the setting labels
  },
  unitText: {
    fontSize: 18,
    fontFamily: 'montbold', // Bold font for the unit system text
  },
  accountButton: {
    marginTop: 5,
    paddingVertical: 15,
    borderRadius: 10, 
    borderWidth: 1, // Border added for better contrast between dark/light modes
    alignItems: 'center',
  },
  accountButtonText: {
    fontSize: 18,
    fontFamily: 'montbold', // Bold font for button text
  },
  linkButton: {
    marginTop: 5,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'montlight', // Light font for the links
    textDecorationLine: 'underline',
  },
});
