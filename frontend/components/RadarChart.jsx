import React from 'react';
import { VictoryChart, VictoryPolarAxis, VictoryArea } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 },
];

const RadarChart = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }} polar>
        <VictoryArea data={data} style={{ data: { fill: 'rgba(0, 122, 255, 0.5)', stroke: '#007AFF' } }} />
        <VictoryPolarAxis />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default RadarChart;
