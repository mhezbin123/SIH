import React from 'react';
import { VictoryChart, VictoryStack, VictoryBar } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data1 = [
  { x: 'Q1', y: 10 },
  { x: 'Q2', y: 20 },
  { x: 'Q3', y: 30 },
];

const data2 = [
  { x: 'Q1', y: 40 },
  { x: 'Q2', y: 50 },
  { x: 'Q3', y: 60 },
];

const StackedGroupedBar = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }} domainPadding={20}>
        <VictoryStack>
          <VictoryBar data={data1} style={{ data: { fill: '#007AFF' } }} />
          <VictoryBar data={data2} style={{ data: { fill: '#00C4FF' } }} />
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

export default StackedGroupedBar;
