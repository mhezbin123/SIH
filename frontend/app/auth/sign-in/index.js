import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { BackHandler } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { postLogin } from "../../../http/signInApi";
export default function LoginScreen() {
  const router = useRouter(); // Initialize the router
  const [secureEntry, setSecureEntry] = useState(true);
  const [userId, setUserId] = useState('');  // State for userId
  const [password, setPassword] = useState('');  // State for passwor

  const handleGoBack = () => {
    router.push('Welcome'); // Go back to the previous page in the navigation stack
  };
  
  useEffect(() => {
    const backAction = () => {
      router.push('Welcome'); // Replace current route with Welcome page
      return true; // Return true to prevent the default back action
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [router]);

  const handleSignup = () => {
    router.push('/auth/sign-up'); // Navigate to the sign-up page
  };

  const handleLogin = async () => {
    // Create object with userId and password
    const loginData = {
      userId: userId,
      password: password,
    };

    try {
      const data = await postLogin(loginData); // Use the postLogin function

      console.log("Login successful");
      // Navigate to the next screen after successful login
      router.push('/navigation/home');
    } catch (error) {
      console.error("Login failed", error);
      Alert.alert("Login Failed", error.message);
    }
  };


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
            <Ionicons
              name={"arrow-back-outline"}
              color={"#333"}
              size={25}
            />
          </TouchableOpacity>

          {/* Welcome Text */}
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Hey,</Text>
            <Text style={styles.headingText}>Welcome</Text>
            <Text style={styles.headingText}>Back</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* UserId Input */}
            <View style={styles.inputContainer}>
              <Ionicons name={"person-outline"} size={24} color={"#666"} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your user ID"
                placeholderTextColor="#666"
                value={userId}
                onChangeText={setUserId}  // Update state on change
              />
            </View>

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <SimpleLineIcons name={"lock"} size={24} color={"#666"} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry={secureEntry}
                value={password}
                onChangeText={setPassword}  // Update state on change
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureEntry((prev) => !prev);
                }}
              >
                <SimpleLineIcons name={secureEntry ? "eye" : "eye-off"} size={20} color={"#666"} />
              </TouchableOpacity>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText} onPress={() => router.push('auth/Forgotpassword')}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupButtonWrapper} onPress={handleSignup}>
              <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor:"#E8E8E8",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textContainer: {
    marginVertical: 30,
  },
  headingText: {
    fontSize: 32,
    color: "#333",
    fontFamily: 'montbold',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 12,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'montregular',
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#0052CC",
    fontFamily: 'montsemibold',
    marginVertical: 5,
  },
  loginButtonWrapper: {
    backgroundColor: "#000000",// "#0052CC",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'montbold',
    textAlign: "center",
  },
  signupButtonWrapper: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  signupText: {
    color: "#0052CC", // Blue text for the Signup button
    fontSize: 16,
    fontFamily: 'montsemibold',
    textAlign: "center",
  },
});
