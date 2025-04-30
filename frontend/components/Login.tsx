import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function Login() {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image 
        source={require('./../assets/images/loginimg.png')}
        style={[styles.appImage, { width, height: height * 0.7 }]}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your app</Text>
        <Text>Your app3</Text>
        <Text>Your app for healthcare management</Text>
        <TouchableOpacity style={styles.button} onPress={() =>router.push('auth/sign-in')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#efebe2',
  },
  appImage: {
    marginTop: 30,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -100,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  text: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    marginTop: -130,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 90,
    elevation: 2,
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
