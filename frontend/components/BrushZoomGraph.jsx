import React from 'react';
import { VictoryChart, VictoryBrushContainer, VictoryAxis, VictoryLine, VictoryLabel } from 'victory-native';
import { View, StyleSheet, Dimensions } from 'react-native';

// Sample data
const data = [
  { x: new Date(2015, 1, 1), y: 470 },
  { x: new Date(2016, 1, 1), y: 300 },
  { x: new Date(2017, 1, 1), y: 520 },
  { x: new Date(2018, 1, 1), y: 200 },
  { x: new Date(2019, 1, 1), y: 610 },
  { x: new Date(2020, 1, 1), y: 410 },
];

const BrushZoomGraph = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <VictoryChart
        width={screenWidth * 0.9} // Adjust width to be responsive
        height={300}
        animate={{ duration: 2000 }}
        domainPadding={{ x: 50, y: 20 }}
        containerComponent={
          <VictoryBrushContainer brushDimension="x" />
        }
      >
        {/* Rotate x-axis labels to prevent overlapping */}
        <VictoryAxis
          tickFormat={(t) => new Date(t).getFullYear()} // Convert `t` to Date object
          tickLabelComponent={<VictoryLabel angle={-45} />} // Rotate labels by -45 degrees
        />
        <VictoryLine data={data} style={{ data: { stroke: "#007AFF" } }} />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,       // Add vertical margin to separate from other elements
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    alignSelf: 'center',      // Centers the container horizontally
    width: '90%',             // Set a percentage width to ensure it adapts to different screen sizes
    maxWidth: 600,            // Optional: restrict max width to prevent stretching on larger screens
  }
});

export default BrushZoomGraph;
