import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SignUp() {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.studentNameText}>Student Name</Text>
        <TextInput 
          style={styles.studentNameTextInput}
          onChangeText={onChangeText}
          value={text}
          maxLength={40}
        />
        <Text style={styles.parentNameText}>Parent Name</Text>
	<TextInput 
          style={styles.parentNameTextInput}
          onChangeText={onChangeText}
          value={text}
          maxLength={40}
        />
        <Text style={styles.parentEmailText}>Parent Email</Text>
	<TextInput 
          style={styles.parentEmailTextInput}
          onChangeText={onChangeText}
          value={text}
          maxLength={40}
        />
        <Text style={styles.usernameText}>Username</Text>
	<TextInput 
          style={styles.usernameTextInput}
          onChangeText={onChangeText}
          value={text}
          maxLength={40}
        />
        <Text style={styles.passwordText}>Password</Text>
	<TextInput 
          style={styles.passwordTextInput}
          onChangeText={onChangeText}
          value={text}
          maxLength={40}
        />
      </View>
      <Link href="/" asChild>
        <Pressable style={styles.buttonCreateAccount}>
          <Text style={styles.buttonCreateAccounText}>Create Account</Text>
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
  inputContainer: {
    width: '80%',
  },
  studentNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 10,
  },
  studentNameTextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginBottom: textInputMargin,
    backgroundColor: '#fff'
  },
  parentNameText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  parentNameTextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    padding: 10,
    marginBottom: textInputMargin,
    backgroundColor: '#fff'
  },
  parentEmailText: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  parentEmailTextInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    padding: 10,
    marginBottom: textInputMargin,
    backgroundColor: '#fff'
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
  buttonCreateAccount: {
    backgroundColor: '#357717',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCreateAccounText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
