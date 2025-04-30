import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Notifications() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Notices'); // Default active tab

  // Dummy data for the tabs
  const noticesData = [
    { date: '11/03/2017', heading: 'Important Update', description: 'System will be down for maintenance.' },
    { date: '14/08/2017', heading: 'Policy Change', description: 'New policies have been updated.' },
  ];

  const requestsData = [
    { date: '12/03/2017', heading: 'Data Request', requestor: 'John Doe', designation: 'Manager', organization: 'Tech Corp', type: 'User Data', state: 'Pending' },
    { date: '14/08/2017', heading: 'Report Request', requestor: 'Jane Smith', designation: 'CEO', organization: 'Business Inc.', type: 'Financial Report', state: 'Resolved' },
  ];

  const sentData = [
    { date: '10/05/2018', heading: 'Financial Request', requestor: 'Me', designation: 'CTO', organization: 'MyCompany', type: 'Quarterly Report', state: 'Pending' },
    { date: '16/09/2018', heading: 'Data Request', requestor: 'Me', designation: 'Developer', organization: 'Dev Corp', type: 'User Statistics', state: 'Resolved' },
  ];

  // Tab Rendering Function
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Notices':
        return (
          <FlatList
            data={noticesData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardDate}>Dated: {item.date}</Text>
                <Text style={styles.cardHeading}>{item.heading}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
              </View>
            )}
          />
        );
      case 'Requests':
        return (
          <FlatList
            data={requestsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardDate}>Dated: {item.date}</Text>
                <Text style={styles.cardHeading}>{item.heading}</Text>
                <Text style={styles.cardDescription}>Requestor: {item.requestor}</Text>
                <Text style={styles.cardDescription}>Designation: {item.designation}</Text>
                <Text style={styles.cardDescription}>Organization: {item.organization}</Text>
                <Text style={styles.cardDescription}>Type: {item.type}</Text>
                <Text style={[styles.cardState, item.state === 'Pending' ? styles.pending : styles.resolved]}>
                  {item.state}
                </Text>
              </View>
            )}
          />
        );
      case 'Sent':
        return (
          <FlatList
            data={sentData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardDate}>Dated: {item.date}</Text>
                <Text style={styles.cardHeading}>{item.heading}</Text>
                <Text style={styles.cardDescription}>Requestor: {item.requestor}</Text>
                <Text style={styles.cardDescription}>Designation: {item.designation}</Text>
                <Text style={styles.cardDescription}>Organization: {item.organization}</Text>
                <Text style={styles.cardDescription}>Type: {item.type}</Text>
                <Text style={[styles.cardState, item.state === 'Pending' ? styles.pending : styles.resolved]}>
                  {item.state}
                </Text>
              </View>
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#333" size={25} />
        </TouchableOpacity>

        <Text style={styles.heading}>Notifications</Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Notices' && styles.activeTab]}
            onPress={() => setActiveTab('Notices')}
          >
            <Text style={[styles.tabText, activeTab === 'Notices' && styles.activeTabText]}>Notices</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Requests' && styles.activeTab]}
            onPress={() => setActiveTab('Requests')}
          >
            <Text style={[styles.tabText, activeTab === 'Requests' && styles.activeTabText]}>Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Sent' && styles.activeTab]}
            onPress={() => setActiveTab('Sent')}
          >
            <Text style={[styles.tabText, activeTab === 'Sent' && styles.activeTabText]}>Sent</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {renderTabContent()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the page to scroll fully
    paddingBottom: 20, // Padding to ensure the buttons are scrollable
  },
  container: {
    flex: 1,
    padding: 20,
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
    marginTop: 20,
  },
  heading: {
    fontSize: 28,
    fontFamily: 'montbold', // Bold font for heading
    color: '#333',
    marginBottom: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  activeTab: {
    borderBottomColor: '#4895EF', // Highlight active tab
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'montregular', // Regular font for tabs
    color: '#666',
  },
  activeTabText: {
    color: '#4895EF', // Active tab text color
  },
  contentContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardDate: {
    fontSize: 14,
    fontFamily: 'montregular',
    color: '#555',
    marginBottom: 5,
  },
  cardHeading: {
    fontSize: 18,
    fontFamily: 'montbold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'montlight',
    color: '#555',
    marginBottom: 5,
  },
  cardState: {
    fontSize: 14,
    fontFamily: 'montbold',
    textAlign: 'right',
  },
  pending: {
    color: '#F2994A', // Pending state color
  },
  resolved: {
    color: '#27AE60', // Resolved state color
  },
});