// Analytics.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import HealthDataInsights from '../../components/HealthDataInsights';
import SchemeInsights from '../../components/SchemeInsights';
import DropdownMenu from '../../components/DropdownMenu';

const AnalyticsPage = () => {
  const navigation = useNavigation();
  const [selectedInsight, setSelectedInsight] = useState('Health Data');
  const [selectedScheme, setSelectedScheme] = useState('Old Age Pension Scheme');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Analytics & Insights</Text>

      {/* Dropdown Menu Component */}
      <DropdownMenu
        selectedInsight={selectedInsight}
        setSelectedInsight={setSelectedInsight}
        selectedScheme={selectedScheme}
        setSelectedScheme={setSelectedScheme}
      />

      {/* Render Health Data Insights */}
      {selectedInsight === 'Health Data' && <HealthDataInsights />}

      {/* Render Healthcare Schemes Insights */}
      {selectedInsight === 'Healthcare Schemes' && <SchemeInsights selectedScheme={selectedScheme} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 10,
    backgroundColor: "#E8E8E8",
    padding: 5,
    borderRadius: 20,
  },
  header: {
    fontSize: 24,
    fontFamily: 'montbold', // Updated to use montbold
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AnalyticsPage;
