import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Auth from './src/auth';
import Inquire from './src/inquire';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='홈 화면' component={Home} />
        <Stack.Screen name='인증' component={Auth} />
        <Stack.Screen name='조회' component={Inquire} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
