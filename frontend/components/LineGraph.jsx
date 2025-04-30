import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data = [
  { x: 1, y: 200 },
  { x: 2, y: 300 },
  { x: 3, y: 150 },
  { x: 4, y: 450 },
];

const LineGraph = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }}>
        <VictoryAxis />
        <VictoryLine data={data} style={{ data: { stroke: '#007AFF' } }} />
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

export default LineGraph;
