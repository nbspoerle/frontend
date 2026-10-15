import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import MainMenu from './screens/MainMenu';
import RobotExamples from './screens/RobotExamples';
import RobotsExamplesSVG from './screens/RobotsExamplesSVG';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Main Menu' }} />
        <Stack.Screen name="RobotExamples" component={RobotExamples} options={{ title: 'Robot Catalog' }} />
        <Stack.Screen name="RobotsExamplesSVG" component={RobotsExamplesSVG} options={{ title: 'Robots SVG' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
