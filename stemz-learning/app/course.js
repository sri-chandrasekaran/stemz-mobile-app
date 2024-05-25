import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions} from 'react-native';
// import * as Progress from 'react-native-progress-fixed';

export default function Course({item}) {
    return (
    <View style = {styles.courses}>
      <View style = {styles.components}>
          <View style={styles.circle}>
          </View>
          <View style = {styles.info}>
            <Text style = {styles.infoCategory}> {item.name} </Text>
            <Text style = {styles.infoText}> {item.description} </Text>
          </View>
      </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    courses: {
        paddingBottom: 20,
    },

    components: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        paddingLeft: 20, 
    },

    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "black",
    },

    info: {
        justifyContent: "flex-end",
        padding: 30,
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