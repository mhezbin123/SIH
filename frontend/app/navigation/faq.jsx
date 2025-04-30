import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const FAQ_DATA = [
  {
    question: "What is Health Data Management?",
    answer: "Health Data Management refers to the process of acquiring, validating, storing, and analyzing health data. It helps in improving patient care, research, and overall healthcare services.",
  },
  {
    question: "How secure is my health data?",
    answer: "We use advanced encryption techniques and follow best practices to ensure that your health data is secure and protected against unauthorized access.",
  },
  {
    question: "Can I access my health data anytime?",
    answer: "Yes, you can access your health data anytime through our app. We provide secure login credentials to ensure your data remains private.",
  },
  {
    question: "What should I do if I encounter an issue?",
    answer: "If you encounter any issues, you can contact our support team through the app or email us at support@healthapp.com. We are here to help you.",
  },
  {
    question: "How can I update my health information?",
    answer: "You can update your health information directly through the app. Go to the profile section and select 'Update Health Information' to make changes.",
  },
  {
    question: "What is the purpose of data analytics in health management?",
    answer: "Data analytics in health management helps in identifying patterns, predicting health outcomes, and making data-driven decisions to improve patient care and operational efficiency.",
  },
  {
    question: "How can I ensure the accuracy of my health data?",
    answer: "Regularly review and update your health information. Ensure that any changes are verified and accurate. Our app also provides features for data validation and error checking.",
  },
  {
    question: "What are the benefits of using this app?",
    answer: "The app provides a comprehensive platform for managing your health data, offers real-time access, enhances data security, and facilitates easy updates and monitoring of your health information.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact customer support through the app by navigating to the 'Help & Support' section or by emailing us at support@healthapp.com.",
  },
  {
    question: "Is my data shared with third parties?",
    answer: "No, your data is not shared with third parties without your explicit consent. We prioritize your privacy and adhere to strict data protection policies.",
  },
];

export default function FAQ() {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Back Button */}
      <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color="#333" size={25} />
      </TouchableOpacity>

        <Text style={styles.heading}>FAQ</Text>
        {FAQ_DATA.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={styles.card}
          >
            <View style={styles.header}>
              <Text style={styles.question}>{item.question}</Text>
            </View>
            {expandedIndex === index && (
              <View style={styles.body}>
                <Text style={styles.answer}>{item.answer}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // White background
  },
  scrollView: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    color: '#0f172a', // Dark text color for the heading
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'left',
    marginLeft: 10,
    fontFamily: 'montbold', // Font for the heading
  },
  card: {
    backgroundColor: '#ffffff', // White background for each card
    borderRadius: 10, // Reduced border radius for minimalism
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0', // Light gray border for minimalistic look
  },
  header: {
    paddingBottom: 10,
  },
  question: {
    fontSize: 16,
    color: '#0f172a', // Dark text color for questions
    fontFamily: 'montregular', // Font for the question
  },
  body: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb', // Light gray border for the expanded view
  },
  answer: {
    fontSize: 14,
    color: '#64748b', // Lighter color for the answer text
    fontFamily: 'montlight', // Font for the answer
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: "#E8E8E8", // Gray background for the back button
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 2,
    marginBottom: 5,
  },
});
