import axios from 'axios';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Auth({navigation}) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhoneNum, setUserPhoneNum] = useState('');
  const [userIdForCheck, setuserIdForCheck] = useState('');
  const [userNameForCheck, setUserNameForCheck] = useState('');
  const [userPhoneNumForCheck, setUserPhoneNumForCheck] = useState('');

  const onChangeUserId = useCallback((text) => {
    setUserId(text);
  }, []);
  const onChangeUserName = useCallback((text) => {
    setUserName(text);
  }, []);
  const onChangeUserPhoneNum = useCallback((text) => {
    setUserPhoneNum(text);
  }, []);

  const onChangeUserIdForCheck = useCallback((text) => {
    setuserIdForCheck(text);
  }, []);
  const onChangeUserNameForCheck = useCallback((text) => {
    setUserNameForCheck(text);
  }, []);
  const onChangeUserPhoneNumForCheck = useCallback((text) => {
    setUserPhoneNumForCheck(text);
  }, []);

  const onSubmit01 = useCallback(() => {
    Alert.alert('사용자 인증', '사용자 인증');
  }, []);
  const onSubmit02 = useCallback(() => {
    Alert.alert('토큰 발급', '토큰 발급');
  }, []);
  const onSubmit03 = useCallback(() => {
    Alert.alert('계좌 등록 확인', '계좌 등록 확인');
  }, []);

  const canGoNext1 = userId && userName && userPhoneNum;
  const canGoNext2 = userIdForCheck && userNameForCheck && userPhoneNumForCheck;

  return (
    <ScrollView>
      <Text style={styles.title}>사용자 인증</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.subTitle}>사용자 인증</Text>
        <View>
          <Text style={styles.label}>회원 아이디</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='회원 아이디' 
            onChangeText={onChangeUserId}
          />
        </View>
        <View>
          <Text style={styles.label}>회원 이름</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='회원 이름' 
            onChangeText={onChangeUserName} 
          />
        </View>
        <View>
          <Text style={styles.label}>회원 전화번호</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='회원 전화번호' 
            onChangeText={onChangeUserPhoneNum} 
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable 
            onPress={onSubmit01} 
            style={
              !canGoNext1
                ? styles.signUpBtn 
                : StyleSheet.compose(styles.signUpBtn, styles.signUpBtnActive)
            } 
            disabled={!canGoNext1}
          >
            <Text style={styles.signUpBtnText}>사용자 인증</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.subTitle}>계좌 등록 확인</Text>
        <View>
          <Text style={styles.label}>회원 아이디</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='회원 아이디' 
            onChangeText={onChangeUserIdForCheck}
          />
        </View>
        <View>
          <Text style={styles.label}>회원 이름</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='회원 이름' 
            onChangeText={onChangeUserNameForCheck}
          />
        </View>
        <View>
          <Text style={styles.label}>회원 전화번호</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='회원 전화번호' 
            onChangeText={onChangeUserPhoneNumForCheck}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Pressable 
            onPress={onSubmit03} 
            style={
              !canGoNext2
                ? styles.signUpBtn 
                : StyleSheet.compose(styles.signUpBtn, styles.signUpBtnActive)
            } 
            disabled={!canGoNext2}
          >
            <Text style={styles.signUpBtnText}>계좌 등록 확인</Text>
          </Pressable>
        </View>
      </View>
      <Button 
        title='홈 화면으로'
        onPress={() => {
          navigation.navigate('홈 화면')
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 20,
    color: 'green',
    marginBottom: 15,
  },
  inputWrapper: {
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  buttonWrapper: {
    alignItems: 'left'
  },
  signUpBtn: {
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpBtnActive: {
    backgroundColor: 'blue',
  },
  signUpBtnText: {
    color: 'white',
    fontSize: 16,
  }
});
