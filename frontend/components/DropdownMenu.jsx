// DropdownMenu.js
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';

const DropdownMenu = ({ selectedInsight, setSelectedInsight, selectedScheme, setSelectedScheme }) => {
  return (
    <>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select Insights:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedInsight(value)}
          items={[
            { label: 'Health Data Analytics', value: 'Health Data' },
            { label: 'Healthcare Schemes Analytics', value: 'Healthcare Schemes' },
          ]}
          value={selectedInsight}
          style={pickerSelectStyles}
          useNativeAndroidPickerStyle={false}
        />
      </View>

      {selectedInsight === 'Healthcare Schemes' && (
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Select Scheme:</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedScheme(value)}
            items={[
              { label: 'Old Age Pension Scheme', value: 'Old Age Pension Scheme' },
              { label: 'Delhi Ladli Scheme', value: 'Delhi Ladli Scheme' },
              { label: 'Delhi Kanyashree Yojana', value: 'Delhi Kanyashree Yojana' },
              { label: 'DGEHS', value: 'DGEHS' },
              { label: 'Delhi Ration Scheme', value: 'Delhi Ration Scheme' },
            ]}
            value={selectedScheme}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    justifyContent: 'space-around',
  },
  dropdownLabel: {
    fontSize: 16,
    fontFamily: 'montsemibold', // Updated to use montsemibold
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    fontFamily: 'montregular', // Use montregular for picker text
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    fontFamily: 'montregular', // Use montregular for picker text
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};

export default DropdownMenu;
