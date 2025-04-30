// HealthDataInsights.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryChart, VictoryLine, VictoryBar, VictoryPie, VictoryTheme } from 'victory-native';

const screenWidth = Dimensions.get('window').width;

const HealthDataInsights = () => {
  return (
    <>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Disease Monitoring Over the Years</Text>
        <VictoryChart theme={VictoryTheme.material} width={screenWidth * 0.9} animate={{ duration: 1000 }}>
          <VictoryLine
            data={[
              { x: 2015, y: 200 },
              { x: 2016, y: 300 },
              { x: 2017, y: 250 },
              { x: 2018, y: 400 },
              { x: 2019, y: 350 },
              { x: 2020, y: 500 },
            ]}
            style={{ data: { stroke: "#007AFF" } }}
            animate={{ onLoad: { duration: 1500 } }}
          />
        </VictoryChart>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Age Group Distribution of Patients</Text>
        <VictoryChart theme={VictoryTheme.material} domainPadding={20} width={screenWidth * 0.9} animate={{ duration: 1500 }}>
          <VictoryBar
            data={[
              { x: "0-10", y: 30 },
              { x: "11-20", y: 50 },
              { x: "21-30", y: 70 },
              { x: "31-40", y: 40 },
              { x: "41-50", y: 60 },
              { x: "51+", y: 35 },
            ]}
            style={{ data: { fill: "#FF5733" } }}
          />
        </VictoryChart>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Health Data Categories</Text>
        <VictoryPie
          data={[
            { x: "Cardiology", y: 35 },
            { x: "Neurology", y: 25 },
            { x: "Orthopedics", y: 15 },
            { x: "Pediatrics", y: 10 },
            { x: "Other", y: 15 },
          ]}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          innerRadius={50}
          labelRadius={80}
          width={screenWidth * 0.9}
          style={{ labels: { fill: "white", fontSize: 10, fontFamily: 'montregular' } }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

export default HealthDataInsights;
