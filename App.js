import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sobre" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}