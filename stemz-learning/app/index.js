import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Profile from './profile';
import CourseList from './courseList';


export default function Page() {
  return (
    <View style={styles.container}>
        <Text style={styles.dashboardtext}> Dashboard </Text>
        <View>
            <Profile></Profile>
        </View>
        <View style = {styles.courseList}>
            <CourseList></CourseList>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e7fde7',
  },
  dashboardtext: {
    paddingTop: 25,
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  courseList: {
      padding: 20,
  }
});