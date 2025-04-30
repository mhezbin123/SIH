import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const router = useRouter(); // Initialize the router
  const [userId, setUserId] = useState("");
  const [otpSent, setOtpSent] = useState(false); // To check if OTP input should be shown
  const [otp, setOtp] = useState("");
  const [showMessage, setShowMessage] = useState(false); // To display success message

  const handleGoBack = () => {
    router.push('auth/sign-in'); // Go back to the previous page in the navigation stack
  };
  
  useEffect(() => {
    const backAction = () => {
      router.push('auth/sign-in'); // Replace current route with Welcome page
      return true; // Return true to prevent the default back action
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [router]);

  const handleSubmitUserId = () => {
    setOtpSent(true); // Show OTP input field after submitting user ID
  };

  const handleVerifyOtp = () => {
    setShowMessage(true); // Show success message after OTP verification
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
            <Ionicons name={"arrow-back-outline"} color={"#333"} size={25} />
          </TouchableOpacity>

          {!showMessage ? (
            <>
              {/* Forgot Password Text */}
              {!otpSent && (
                <View style={styles.textContainer}>
                  <Text style={styles.headingText}>Forgot Password</Text>
                  <Text style={styles.subHeadingText}>
                    Enter your User ID to reset your password.
                  </Text>
                </View>
              )}

              {/* User ID Input */}
              {!otpSent && (
                <View style={styles.formContainer}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Enter User ID"
                      value={userId}
                      onChangeText={(text) => setUserId(text)}
                    />
                  </View>

                  {/* Submit User ID Button */}
                  <TouchableOpacity style={styles.submitButtonWrapper} onPress={handleSubmitUserId}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )}

              {/* OTP Input */}
              {otpSent && (
                <View style={styles.formContainer}>
                  <Text style={styles.headingText}>Enter OTP</Text>
                  <Text style={styles.subHeadingText}>
                    Enter the 6-digit OTP sent to your registered email.
                  </Text>
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

                  {/* Verify Button */}
                  <TouchableOpacity style={styles.verifyButtonWrapper} onPress={handleVerifyOtp}>
                    <Text style={styles.verifyButtonText}>Verify</Text>
                  </TouchableOpacity>
                </View>
              )}
            </>
          ) : (
            /* Message After Successful OTP Verification */
            <View style={styles.successMessageContainer}>
              <Text style={styles.successMessageText}>
                New password has been sent to your registered email.
              </Text>
            </View>
          )}
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
    fontFamily: "montbold",
  },
  subHeadingText: {
    fontSize: 16,
    color: "#666",
    fontFamily: "montregular",
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
    fontFamily: "montregular",
  },
  submitButtonWrapper: {
    backgroundColor: "#000000",//"#0052CC",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "montbold",
    textAlign: "center",
  },
  verifyButtonWrapper: {
    backgroundColor: "#000000",//"#0052CC",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "montbold",
    textAlign: "center",
  },
  successMessageContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  successMessageText: {
    fontSize: 20,
    fontFamily: "montbold",
    color: "#000000",//"#0052CC",
    textAlign: "center",
  },
});
