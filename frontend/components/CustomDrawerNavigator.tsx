// Import necessary modules
import { Drawer } from 'expo-router/drawer';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// Custom Drawer Content
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Icon at the top of the drawer */}
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Ionicons name="logo-react" size={50} color="blue" /> 
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>My App</Text>
      </View>

      {/* Drawer Items (Screens) */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

// Custom Drawer Navigator
export default function CustomDrawerNavigator({ children }) {
  const router = useRouter();
  const currentRoute = router.asPath || ''; // Ensure currentRoute is defined

  // Determine if the drawer should be locked
  const shouldLockDrawer = ['/auth/sign-in', '/auth/sign-up', '/Welcome']
    .some(route => currentRoute.startsWith(route));

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLockMode: shouldLockDrawer ? 'locked-closed' : 'unlocked',
      }}
    >
      {children}
    </Drawer>
  );
}
