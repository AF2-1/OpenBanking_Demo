import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <View>
        <Text>Home</Text>
        <Button 
            title='인증'
            onPress={() => {
                navigation.navigate('Auth')
            }}
        />
        <Button 
            title='조회'
            onPress={() => {
                navigation.navigate('Inquire')
            }}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  }
});
