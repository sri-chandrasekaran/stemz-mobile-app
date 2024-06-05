import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  const [inputtedUsernameText, onChangeUsernameText] = React.useState('');
  const [inputtedPasswordText, onChangePasswordText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.usernameText}>Username</Text>
	<TextInput 
          style={styles.usernameTextInput}
          onChangeText={onChangeUsernameText}
          value={inputtedUsernameText}
          maxLength={40}
        />
        <Text style={styles.passwordText}>Password</Text>
	<TextInput 
          style={styles.passwordTextInput}
          onChangeText={onChangePasswordText}
          value={inputtedPasswordText}
          maxLength={40}
        />
      </View>
      <Link href="/courseList" asChild>
        <Pressable style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const textInputMargin = 30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e7fde7',
  },
  text: {
    fontSize: 24,
  },
  usernameText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  usernameTextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    padding: 10,
    marginBottom: textInputMargin,
    backgroundColor: '#fff'
  },
  passwordText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  passwordTextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    padding: 10,
    marginBottom: textInputMargin,
    backgroundColor: '#fff'
  },
  buttonLogin: {
    backgroundColor: '#357717',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLoginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
