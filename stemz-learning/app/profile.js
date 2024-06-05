import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default function Profile() {
    return (
      <View style = {styles.components}>
        <View style = {styles.pfp}>
          <View style={styles.circle} />
          <Text style = {styles.infoText}>username</Text>
        </View>
          <View style = {styles.info}>
            <Text style = {styles.infoCategory}> Points </Text>
            <Text style = {styles.infoText}> 239482 </Text>
            <Text style = {styles.infoCategory}> Text </Text>
            <Text style = {styles.infoText}> Some Name </Text>
          </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    components: {
      flexDirection: 'row',
    },

    pfp: {
      alignItems: 'center',
    },

    circle: {
      width: Dimensions.get('window').height * 1/8,
      height: Dimensions.get('window').height * 1/8,
      borderRadius: Dimensions.get('window').height * 1/16,
      backgroundColor: "black",
    },

    image: {
      justifyContent: "flex-start",
      padding: 30,
      width: Dimensions.get('window').height * 1/6, 
      height: Dimensions.get('window').height * 1/6,
      resizeMode: 'contain',
    },

    info: {
      justifyContent: "flex-end",
      paddingLeft: 50,
    },

    infoCategory: {
      paddingTop: 5,
      fontSize: 25,
    },

    infoText: {
      paddingTop: 2,
      fontSize: 20,
    }
    
  });
