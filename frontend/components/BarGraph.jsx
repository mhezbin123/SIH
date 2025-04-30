import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data = [
  { x: '2018', y: 100 },
  { x: '2019', y: 200 },
  { x: '2020', y: 300 },
];

const BarGraph = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }}>
        <VictoryAxis />
        <VictoryBar data={data} style={{ data: { fill: '#007AFF' } }} />
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

export default BarGraph;
