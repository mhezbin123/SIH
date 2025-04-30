import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from 'react-native';
import { useRouter } from 'expo-router';

export default function OtpScreen() {
  const navigation = useNavigation();
  const router = useRouter(); // Initialize the router
  const [otp, setOtp] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(10);

  const handleGoBack = () => {
    router.push('auth/sign-in'); // Go back to the previous page in the navigation stack
  };

  // Handle back button press for Android
  useEffect(() => {
    const backAction = () => {
      router.push('auth/sign-in'); // Replace current route with Welcome page
      return true; // Return true to prevent the default back action
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Clean up the listener on unmount
  }, [router]);

  // Countdown for resend OTP
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleVerify = () => {
    console.log("OTP Verified");
    navigation.navigate('Home');
  };

  const handleResendOtp = () => {
    if (!resendDisabled) {
      console.log("OTP Resent");
      setResendDisabled(true);
      setTimer(10); // Restart the timer when OTP is resent
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

          {/* OTP Text */}
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Enter OTP</Text>
            <Text style={styles.subHeadingText}>
              Enter the 6-digit OTP sent to your registered email.
            </Text>
          </View>

          {/* OTP Input */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter OTP"
                keyboardType="numeric"
                maxLength={6}
                value={otp}
                onChangeText={(text) => setOtp(text)}
              />
            </View>

            {/* Resend OTP */}
            <TouchableOpacity onPress={handleResendOtp} disabled={resendDisabled}>
              <Text style={[styles.resendOtpText, resendDisabled && { color: "#999" }]}>
                Resend OTP {resendDisabled && `in ${timer}s`}
              </Text>
            </TouchableOpacity>

            {/* Verify Button */}
            <TouchableOpacity style={styles.verifyButtonWrapper} onPress={handleVerify}>
              <Text style={styles.verifyText}>Verify</Text>
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
    backgroundColor: "#E8E8E8",
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
  subHeadingText: {
    fontSize: 16,
    color: "#666",
    fontFamily: 'montregular',
    marginTop: 10,
  },
  formContainer: {
    marginTop: 30,
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
  resendOtpText: {
    textAlign: "right",
    color: "#0052CC",
    fontFamily: 'montsemibold',
    marginVertical: 5,
  },
  verifyButtonWrapper: {
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  verifyText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'montbold',
    textAlign: "center",
  },
});
