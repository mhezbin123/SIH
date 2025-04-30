import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false); // State for managing menu toggle

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false); // Close the menu if it's already open
      clearTimeout(menuTimeout); // Clear the timeout if the menu is closed manually
    } else {
      setMenuOpen(true); // Open the menu
      menuTimeout = setTimeout(() => {
        setMenuOpen(false); // Automatically close the menu after 5 seconds
      }, 3000);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo Image */}
        <View style={styles.logoContainer}>
          <Image source={require('./../../assets/images/welcomelogoblack.png')} style={styles.logo} />
        </View>

        {/* Header Icons and Title */}
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu-outline" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Home</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <Ionicons name="search-outline" size={28} color="white" style={styles.iconSpacing} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Ionicons name="notifications-outline" size={28} color="white" style={styles.iconSpacing} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Myaccount')}>
              <Ionicons name="person-circle-outline" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Conditional Side Menu */}
      {menuOpen &&(
        <View style={styles.sideMenu}>
          <TouchableOpacity onPress={() => navigation.navigate('News')}>
            <Text style={styles.menuItem}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.menuItem}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.menuItem}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.menuItem}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('faq')}>
            <Text style={styles.menuItem}>FAQ</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Scrollable Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>

        {/* Banner Section */}
        <View style={styles.bannerContainer}>
          <Image source={require('./../../assets/images/banner3.png')} style={styles.bannerImage} />
          <Text style={styles.bannerText}>Annual Health Index</Text>
        </View>

        {/* Activities Section with Horizontal Buttons */}
        <Text style={styles.sectionHeading}>Activities</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.activityButton} onPress={() => navigation.navigate('Submitdata')}>
            <Ionicons name="create-outline" size={24} color="white" />
            <Text style={styles.activityButtonText}>Submit Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activityButton} onPress={() => navigation.navigate('Analyze')}>
            <Ionicons name="analytics-outline" size={24} color="white" />
            <Text style={styles.activityButtonText}>Analyze</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activityButton} onPress={() => navigation.navigate('Requestdata')}>
            <Ionicons name="document-text-outline" size={24} color="white" />
            <Text style={styles.activityButtonText}>Request Data</Text>
          </TouchableOpacity>
        </View>

        {/* Random Text Section */}
        <Text style={styles.randomText}>
        "Simplify Health Data, Amplify Care"
        </Text>

        {/* Removed Join WhatsApp Button */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#000',
    padding: 10,
    paddingTop: -30,
    paddingBottom: 30,
    alignItems: 'left',
  },
  logoContainer: {
    marginBottom: -40, // Creates space between the logo and the header content
    alignItems: 'left',
    marginTop: -20,
  },
  logo: {
    width: 140, // Adjust logo width
    height: 120, // Adjust logo height
    resizeMode: 'contain',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: -20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'montbold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginRight: 10,
  },
  sideMenu: {
    backgroundColor: '#333',
    padding: 15,
    position: 'absolute',
    borderRadius: 10,
    top: 110,
    left: 8,
    width: '60%',
    zIndex: 10,
  },
  menuItem: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'montlight',
    marginBottom: 15,
  },
  contentContainer: {
    padding: 20,
  },
  bannerContainer: {
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: -10,
    marginRight: -10,
  },
  bannerText: {
    color: 'white',
    fontFamily: 'montmedium',
    fontSize: 18,
    marginTop: 4,
    marginBottom: 2,
  },
  sectionHeading: {
    fontFamily: 'montbold',
    fontSize: 22,
    color: '#000000',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activityButton: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  activityButtonText: {
    color: 'white',
    fontFamily: 'montmedium',
    marginTop: 10,
    textAlign: 'center',
  },
  randomText: {
    fontFamily: 'montregular',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
});
