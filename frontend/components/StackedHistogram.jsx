import React from 'react';
import { VictoryChart, VictoryStack, VictoryBar } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const dataMale = [
  { x: 'ANC', y: 70 },
  { x: 'PNC', y: 80 },
  { x: 'Immunization', y: 90 },
];

const dataFemale = [
  { x: 'ANC', y: 60 },
  { x: 'PNC', y: 90 },
  { x: 'Immunization', y: 100 },
];

const StackedHistogram = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }} domainPadding={20}>
        <VictoryStack>
          <VictoryBar data={dataMale} style={{ data: { fill: '#007AFF' } }} />
          <VictoryBar data={dataFemale} style={{ data: { fill: '#00C4FF' } }} />
        </VictoryStack>
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

export default StackedHistogram;
