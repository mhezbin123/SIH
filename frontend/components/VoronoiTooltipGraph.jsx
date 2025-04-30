import React from 'react';
import { VictoryVoronoiContainer, VictoryTooltip, VictoryChart, VictoryBar } from 'victory-native';
import { View, StyleSheet } from 'react-native';

const data = [
  { x: 'Apollo', y: 270 },
  { x: 'AIIMS', y: 350 },
  { x: 'Fortis', y: 230 },
];

const VoronoiTooltipGraph = () => {
  return (
    <View style={styles.container}>
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            labelComponent={<VictoryTooltip />}
          />
        }
      >
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

export default VoronoiTooltipGraph;
