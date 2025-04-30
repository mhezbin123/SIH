import { useForm } from 'react-hook-form';
import React from "react";
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
import { useRouter } from 'expo-router';
import { signupUser } from '../../../http/signUpApi';

const SignupPage = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      userId: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      districtId: '',
      subDistrictId: '',
      facilityId: '',
    },
  });
  const router = useRouter();

  // Register input fields
  React.useEffect(() => {
    register('userId');
    register('firstName');
    register('lastName');
    register('email');
    register('password');
    register('districtId');
    register('subDistrictId');
    register('facilityId');
  }, [register]);

  const handleGoBack = () => {
    router.push('Welcome'); // Navigate back to the Welcome page
  };

  const handleLogin = () => {
    router.push('/auth/sign-in'); // Navigate to the Login page
  };

  const onSubmit = async (data) => {
    try {
      const result = await signupUser(data); // Call the signup API
      console.log('Signup successful:', result);
      Alert.alert('Signup Successful', 'You have successfully signed up.');
      router.push('/home'); // Navigate to the home page
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Signup Error', 'There was an error signing up.');
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
            <Ionicons name={"arrow-back-outline"} color={"#333"} size={25} />
          </TouchableOpacity>

          {/* Sign Up Header */}
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>Sign Up</Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* User ID Input */}
            <Text style={styles.label}>User ID:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your user ID"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('userId', text)}
                value={watch('userId') || ''}
              />
              {errors.userId && <Text style={styles.errorText}>{errors.userId.message}</Text>}
            </View>

            {/* First Name Input */}
            <Text style={styles.label}>First Name:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your first name"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('firstName', text)}
                value={watch('firstName') || ''}
              />
              {errors.firstName && <Text style={styles.errorText}>{errors.firstName.message}</Text>}
            </View>

            {/* Last Name Input */}
            <Text style={styles.label}>Last Name:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your last name"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('lastName', text)}
                value={watch('lastName') || ''}
              />
              {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}
            </View>

            {/* Email Input */}
            <Text style={styles.label}>Email:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('email', text)}
                value={watch('email') || ''}
                keyboardType="email-address"
              />
              {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            </View>

            {/* Password Input */}
            <Text style={styles.label}>Password:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                secureTextEntry
                onChangeText={(text) => setValue('password', text)}
                value={watch('password') || ''}
              />
              {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            </View>

            {/* District ID Input */}
            <Text style={styles.label}>District ID:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your district ID"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('districtId', text)}
                value={watch('districtId') || ''}
              />
            </View>

            {/* Sub-District ID Input */}
            <Text style={styles.label}>Sub-District ID:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your sub-district ID"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('subDistrictId', text)}
                value={watch('subDistrictId') || ''}
              />
            </View>

            {/* Facility ID Input */}
            <Text style={styles.label}>Facility ID:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your facility ID"
                placeholderTextColor="#666"
                onChangeText={(text) => setValue('facilityId', text)}
                value={watch('facilityId') || ''}
              />
            </View>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupButtonWrapper} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
              <Text style={styles.loginText}>Already have an account? Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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
    marginTop: -10,
    marginBottom: -10,
    textAlign: 'left',
  },
  formContainer: {
    marginTop: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    paddingVertical: 5,
    marginVertical: 12,
  },
  label: {
    fontFamily: 'montregular',
    color: "#666",
    marginTop: 5,
    marginBottom: -5,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'montregular',
  },
  errorText: {
    color: "red",
    fontFamily: 'montregular',
    marginTop: 5,
  },
  signupButtonWrapper: {
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'montbold',
    textAlign: "center",
  },
  loginButtonWrapper: {
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  loginText: {
    color: "#0052CC",
    fontSize: 16,
    fontFamily: 'montsemibold',
    marginTop: -10,
    textAlign: "center",
  },
});

export default SignupPage;