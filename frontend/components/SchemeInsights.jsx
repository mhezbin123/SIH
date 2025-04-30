// SchemeInsights.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

const screenWidth = Dimensions.get('window').width;

const SchemeInsights = ({ selectedScheme }) => {
  // Existing data and implementation remains as before
  return (
    <>
      <Text style={styles.header}>{selectedScheme} Insights</Text>

      {/* Demographic Data Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Demographic Data</Text>
        <VictoryPie
          data={[
            { x: "Children", y: 35 },
            { x: "Adults", y: 50 },
            { x: "Seniors", y: 15 },
          ]}
          colorScale={["green", "orange", "blue"]}
          animate={{ duration: 2000 }}
          width={screenWidth * 0.9}
          labelRadius={({ innerRadius }) => innerRadius + 20}
          style={{
            labels: { fontSize: 12, fill: "#333", fontFamily: 'montregular' }, // Use montregular for labels
          }}
        />
      </View>

      {/* Resources Used Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Resources Used</Text>
        <VictoryChart theme={VictoryTheme.material} width={screenWidth * 0.9}>
          <VictoryBar
            data={[
              { x: "Beds", y: 100 },
              { x: "Medicines", y: 200 },
              { x: "Doctors", y: 150 },
            ]}
            style={{
              data: { fill: "#007AFF" }, 
              labels: { fontSize: 10, fontFamily: 'montregular' }, // Use montregular for labels
            }}
            labels={({ datum }) => `${datum.y}`}
            animate={{ duration: 2000 }}
          />
        </VictoryChart>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'montbold', // Updated to use montbold
    marginBottom: 20,
    textAlign: 'center',
  },
  chartContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    elevation: 5,
  },
  chartTitle: {
    fontSize: 16,
    fontFamily: 'montsemibold', // Updated to use montsemibold
    marginBottom: 10,
  },
});

export default SchemeInsights;
