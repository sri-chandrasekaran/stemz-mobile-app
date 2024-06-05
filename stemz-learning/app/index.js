import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/stem_logo.png')} style={styles.image} />
      <Text style={styles.title}>STEMz Learning</Text>
      <Link href="/signUp" asChild>
        <Pressable style={styles.buttonSignUp}>
          <Text style={styles.buttonSignUpText}>Sign Up</Text>
        </Pressable>
      </Link>
      <Link href="/login" asChild>
        <Pressable style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#357717',
    marginBottom: 60,
  },
  buttonSignUp: {
    backgroundColor: '#357717',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonLogin: {
    backgroundColor: '#357717',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLoginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
