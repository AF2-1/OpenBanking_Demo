import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <View>
      <Text style={styles.title}>오픈뱅킹 데모</Text>
      <Button 
        title='인증'
        onPress={() => {
            navigation.navigate('인증')
        }}
      />
      <Button 
        title='조회'
        onPress={() => {
          navigation.navigate('조회')
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
