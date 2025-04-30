import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function QuoteCards() {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <MaterialIcons name="format-quote" size={40} color="black" />
        <Text style={styles.quoteText}>
          "The only limit to our realization of tomorrow is our doubts of today."
        </Text>
        <Text style={styles.authorText}>- Franklin D. Roosevelt</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="format-quote" size={40} color="black" />
        <Text style={styles.quoteText}>
          "Success is not final, failure is not fatal: It is the courage to continue that counts."
        </Text>
        <Text style={styles.authorText}>- Winston Churchill</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="format-quote" size={40} color="black" />
        <Text style={styles.quoteText}>
          "Your time is limited, don't waste it living someone else's life."
        </Text>
        <Text style={styles.authorText}>- Steve Jobs</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: '#333',
  },
  authorText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
