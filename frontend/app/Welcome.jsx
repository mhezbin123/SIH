import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native';
import { router } from 'expo-router'; // Import router from expo-router




export default function WelcomeScreen() {

  useEffect(() => {
    const backAction = () => {
      // Exit the app when back button is pressed on the WelcomeScreen
      BackHandler.exitApp();
      return true; // Return true to prevent the default back action
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  
  return (
    <View style={styles.container}>

      {/* Logo */}
      <Image source={require('../assets/images/welcomelogo.png')} style={styles.logo} />

      {/* Main Illustration */}
      <Image source={require('../assets/images/welcomeman.png')} style={styles.bannerImage} />

      {/* Title */}
      <Text style={styles.title}>Simplify Health Data, Amplify Care.</Text>

      {/* Subtitle */}
      <Text style={styles.subTitle}>
        Securely connect all your health data in one platform. Simplifying healthcare management for smarter, better care.. easy to use
      </Text>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* Login Button */}
        <TouchableOpacity
          style={[styles.buttonWrapper, styles.loginButton]}
          onPress={() => router.push('/auth/sign-in')} // Use router.push for navigation
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Button */}
        <TouchableOpacity
          style={[styles.buttonWrapper, styles.signupButton]}
          onPress={() => router.push('/LearnMore')} // Use router.push for signup or learn more
        >
          <Text style={styles.signupButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginTop: 20,
    height: 50,  // Adjust height as needed
    width: 200,  // Adjust width as needed
    marginBottom: 20,
  },
  bannerImage: {
    height: 125,   // Adjust height as needed
    width: 125,    // Adjust width as needed
    marginBottom: 30,
  },
  title: {
    marginTop: -10,
    fontSize: 32,
    fontFamily: 'montbold',  // Use the same font family as above
    textAlign: 'center',
    color: '#333333', // Dark text
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'montregular', // Regular font style
    textAlign: 'center',
    color: '#666666', // Light gray text
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: -40,
    width: '48%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#000000', // Black for Login button
  },
  signupButton: {
    backgroundColor: '#FFFFFF', // White for Signup button
    borderWidth: 1,
    borderColor: '#000000', // Black border for Signup button
  },
  loginButtonText: {
    color: '#FFFFFF', // White text for Login button
    fontSize: 18,
    fontFamily: 'montbold',
  },
  signupButtonText: {
    color: '#000000', // Black text for Signup button
    fontSize: 18,
    fontFamily: 'montbold',
  },
});
