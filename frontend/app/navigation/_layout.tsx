import React from 'react';
import { Drawer } from 'expo-router/drawer'; // Ensure correct import
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router'; // Import router
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Icon at the top of the drawer */}
      <View style={styles.header}>
        <Image source={require('./../../assets/images/welcomelogo.png')} style={styles.logo} />
      </View>

      {/* Custom Drawer Items */}
      <DrawerItem
        label="Home"
        icon={() => <AntDesign name="home" size={24} color="black" />}
        onPress={() => props.navigation.navigate('home')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Notifications"
        icon={() => <Ionicons name="notifications-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Notifications')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Analytics"
        icon={() => <AntDesign name="linechart" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Analytics')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Submit Data"
        icon={() => <Ionicons name="book-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Submitdata')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="News"
        icon={() => <Ionicons name="newspaper-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('News')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Contact Us"
        icon={() => <Ionicons name="chatbubbles-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Contact')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Settings"
        icon={() => <Ionicons name="settings-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Settings')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="My Account"
        icon={() => <Ionicons name="person-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Myaccount')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Request Data"
        icon={() => <Ionicons name="search-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('Requestdata')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="FAQ"
        icon={() => <Ionicons name="bookmarks-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('faq')}
        labelStyle={styles.drawerLabel}
      />
      {/* <DrawerItem
        label="DataEntry"
        icon={() => <Ionicons name="bookmarks-outline" size={24} color="black" />}
        onPress={() => props.navigation.navigate('DataEntry')}
        labelStyle={styles.drawerLabel}
      /> */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop:10
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: -60,
    marginTop: -50,
  },
  drawerLabel: {
    fontFamily: 'montbold', // Ensure 'montbold' is correctly loaded in your project
    fontSize: 16,
    marginBottom: -5,
  },
});

export default function RootLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel:" ",
          title: 'Home',
          drawerIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/Notifications')}>
              <Ionicons name="notifications-outline" size={28} color="black" />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: 'Notification',
          title: 'Notifications',
          drawerIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Analytics"
        options={{
          drawerLabel: 'Analytics',
          title: 'Analytics',
          drawerIcon: () => (
            <AntDesign name="linechart" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Submitdata"
        options={{
          drawerLabel: 'Analytics',
          title: 'Analytics',
          drawerIcon: () => (
            <AntDesign name="linechart" size={24} color="black" />
          ),
          headerShown: false,
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="News"
        options={{
          drawerLabel: 'News',
          title: 'News',
          drawerIcon: () => (
            <Ionicons name="newspaper-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Contact"
        options={{
          drawerLabel: 'Contact',
          title: 'Contact Us',
          drawerIcon: () => (
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Myaccount"
        options={{
          drawerLabel: 'My account',
          title: 'Myaccount',
          drawerIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Requestdata"
        options={{
          drawerLabel: 'Request data',
          title: 'Requestdata',
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
          
        }}
      />
      {/* <Drawer.Screen
        name="Welcome"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
          drawerItemStyle: { height:0 },
          swipeEnabled:false,
          swipeEdgeWidth:0
        }}
      /> */}
      {/* <Drawer.Screen
        name="auth/sign-in/index"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
          drawerItemStyle: { display: 'none' },
        }}
      /> */}
      {/* <Drawer.Screen
        name="auth/sign-up/index"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
          drawerItemStyle: { display: 'none' },
        }}
      /> */}
      {/* <Drawer.Screen
        name="auth/Forgotpassword"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
          drawerItemStyle: { display: 'none' },
        }}
      /> */}
      {/* <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
        }}
      /> */}
        <Drawer.Screen
        name="DataEntry"
        options={{
          drawerLabel: 'FAQ',
          title: 'FAQ',
          drawerIcon: () => (
            <Ionicons name="bookmarks-outline" size={24} color="black" />
          ),
          headerShown: false,
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
    
  );
}