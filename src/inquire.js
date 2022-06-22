import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Inquire({navigation}) {
  return (
    <View>
        <Text>Inquire</Text>
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
  title: {
    fontSize: 30,
  }
});
