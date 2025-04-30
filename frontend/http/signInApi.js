// http/api.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postLogin = async (loginData) => {
    try {
      const response = await fetch('https://sih-backend-tgt0.onrender.com/api/v1/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('userDetails', JSON.stringify(data.userDetails));

      return data; // Return the response data on success
    } catch (error) {
      throw new Error(error.message || 'An error occurred during login');
    }
  };