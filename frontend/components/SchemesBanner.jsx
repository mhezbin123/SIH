import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

export default function SchemesBanner() {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
      {/* Banner 1 */}
      <View style={styles.bannerContainer}>
        <Image source={require('./../assets/images/banner.png')} style={styles.bannerImage} />
      </View>

      {/* Banner 2 */}
      <View style={styles.bannerContainer}>
        <Image source={require('./../assets/images/banner3.png')} style={styles.bannerImage} />
      </View>

      {/* Banner 3 */}
      <View style={styles.bannerContainer}>
        <Image source={require('./../assets/images/banner3.png')} style={styles.bannerImage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerContainer: {
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  bannerImage: {
    width: 300, // Adjust based on your design
    height: 150,
    borderRadius: 10,
  },
});
