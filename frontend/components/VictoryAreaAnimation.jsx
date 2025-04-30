import React from 'react';
import { VictoryChart, VictoryArea } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data = [
  { x: 1, y: 120 },
  { x: 2, y: 150 },
  { x: 3, y: 75 },
  { x: 4, y: 200 },
  { x: 5, y: 150 },
];

const VictoryAreaAnimation = () => {
  return (
    <View style={styles.container}>
      <VictoryChart animate={{ duration: 2000 }}>
        <VictoryArea
          data={data}
          style={{ data: { fill: 'rgba(0, 122, 255, 0.5)', stroke: '#007AFF' } }}
        />
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

export default VictoryAreaAnimation;
