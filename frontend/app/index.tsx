import { Text, View } from "react-native";
import Login from '../components/Login';
import { Redirect } from "expo-router";
import { useFonts } from 'expo-font';
import Welcome from './Welcome';

export default function Index() {
  const [loaded, error] = useFonts({
    'appfont': require('./../assets/fonts/Outfit-Regular.ttf'),
    'appfontbold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'appfontsemibold': require('./../assets/fonts/Outfit-SemiBold.ttf'),
    'montbold':require('./../assets/fonts/Montserrat-Bold.ttf'),
    'montsemibold':require('./../assets/fonts/Montserrat-SemiBold.ttf'),
    'montmedium':require('./../assets/fonts/Montserrat-Medium.ttf'),
    'montregular':require('./../assets/fonts/Montserrat-Regular.ttf'),
    'montlight':require('./../assets/fonts/Montserrat-Light.ttf')
  });
  
  if(!loaded)
  {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,                    // Takes up the full available screen space
        justifyContent: "center",    // Vertically centers the content
        alignItems: "center",        // Horizontally centers the content
      }}
    >
      {/* <Login/> */}
      <Welcome/>
       {/* <Text>hi</Text> */}
    </View>
  );
}