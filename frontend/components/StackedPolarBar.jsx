import React from 'react';
import { VictoryPolarAxis, VictoryStack, VictoryBar, VictoryChart } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const dataMale = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
];

const dataFemale = [
  { x: 1, y: 1 },
  { x: 2, y: 4 },
  { x: 3, y: 2 },
];

const StackedPolarBar = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }} polar>
        <VictoryStack>
          <VictoryBar data={dataMale} style={{ data: { fill: '#007AFF' } }} />
          <VictoryBar data={dataFemale} style={{ data: { fill: '#00C4FF' } }} />
        </VictoryStack>
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

export default StackedPolarBar;
