import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Auth({navigation}) {
  return (
    <View>
      <Text style={styles.title}>인증</Text>
      <Button 
        title='홈 화면으로'
        onPress={() => {
          navigation.navigate('홈 화면')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
});
