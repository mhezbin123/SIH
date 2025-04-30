import axios from 'axios';

export const signupUser = async (data) => {
  try {
    const response = await axios.post(
      'https://sih-backend-tgt0.onrender.com/api/v1/user/signup',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Signup error:', error);
    throw new Error('Signup Error');
  }
};