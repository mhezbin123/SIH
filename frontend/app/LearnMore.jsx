import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity, View, BackHandler } from 'react-native';
import { router } from 'expo-router';

export default function LearnMoreScreen() {
  
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/welcomelogo.png')} style={styles.logo} />

      {/* Main Title */}
      <Text style={styles.title}>Welcome to Health X, the Future of Healthcare Analytics</Text>

      {/* Subtitle */}
      <Text style={styles.subTitle}>
        Brought to you by Team Neon Nexus, our mission is to revolutionize how disease data is managed and analyzed.
      </Text>

      {/* Core Features Section */}
      <Text style={styles.text}>
        <Text style={styles.boldText}>Health X</Text> is a scalable app designed for real-time disease tracking and secure health data management, 
        with AI/ML chatbot support for user engagement. It supports multiple levels of health administration, from national to local.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.boldText}>Centralized Data:</Text> Aggregates health data from various sources.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Real-Time Disease Monitoring:</Text> Tracks outbreaks instantly.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Data Security:</Text> Includes encryption and regulatory compliance.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Interactive Visuals:</Text> Real-time tracking via charts and graphs.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Customizable User Access:</Text> Different views for patients and healthcare organizations.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Chatbot:</Text> Provides real-time health insights and assistance.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Offline Mode:</Text> Supports areas with low connectivity.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Multi-language Support:</Text> User-friendly interface across different languages.
      </Text>

      {/* Potential Impact Section */}
      <Text style={styles.sectionTitle}>Potential Impact</Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Healthcare Workers:</Text> Faster, more efficient decision-making.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Patients:</Text> Improved access to personal health data.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Government:</Text> Enhanced health monitoring and response capabilities.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Environmental:</Text> Promotes eco-friendly practices, reducing paper usage.
      </Text>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* Back to Welcome Button */}
        <TouchableOpacity
          style={[styles.buttonWrapper, styles.backButton]}
          onPress={() => router.push('/')}
        >
          <Text style={styles.backButtonText}>Back to Welcome</Text>
        </TouchableOpacity>

        {/* Get Started Button */}
        <TouchableOpacity
          style={[styles.buttonWrapper, styles.getStartedButton]}
          onPress={() => router.push('/auth/sign-in')}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center', // Centering the content vertically
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'montbold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'montregular',
    textAlign: 'center',
    color: '#666666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'montbold',
    textAlign: 'center', // Align text in the center
    color: '#333333',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'montregular',
    textAlign: 'center', // Align text in the center
    color: '#666666',
    marginBottom: 10,
  },
  boldText: {
    fontFamily: 'montbold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  buttonWrapper: {
    width: '48%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
  },
  getStartedButton: {
    backgroundColor: '#000000',
  },
  backButtonText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'montbold',
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'montbold',
  },
});
