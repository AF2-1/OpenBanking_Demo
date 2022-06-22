import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';

export default function Auth({navigation}) {
  return (
    <View>
        <Text>Auth</Text>
        <Button 
            title='홈 화면으로'
            onPress={() => {
                navigation.navigate('Home')
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  }
});
