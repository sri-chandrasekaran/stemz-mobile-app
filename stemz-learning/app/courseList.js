import React, {useState} from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Course from './course';


export default function CourseList() {
    const [all, setAll] = useState(true);
    const [done, setDone] = useState(false);
    const allCourses = [{name: "Astronomy", description: "Brief Description", progress: '0.5', key: '1'},
                    {name: "Calculus", description: "Brief Description", progress: '0.5', key: '2'}, 
                    {name: "Calculus", description: "Brief Description", progress: '0.3', key: '3'},
                    {name: "Calculus", description: "Brief Description", progress: '0.65', key: '4'},
                    {name: "Calculus", description: "Brief Description", progress: '0.12', key: '5'}];
    const completedCourses = [{name: "Astronomy", description: "Brief Description", progress: '1.0', key: '1'}];
    const [courses, setCourses] = useState(allCourses);

    const updateAllCourses = () => {
        setAll(true);
        setDone(false);
        setCourses(allCourses);
        console.log("All pressed");
    }

    const updateDoneCourses = () => {
        setAll(false);
        setDone(true);
        setCourses(completedCourses);
        console.log("done pressed");
    }

    return (
      <View>
          <View style = {styles.components}>
              <TouchableOpacity style = {styles.buttons} onPress={updateAllCourses}>
                  <Text style = {styles.categories}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttons} onPress={updateDoneCourses}>
                  <Text style = {styles.categories} >Done</Text>
              </TouchableOpacity>
          </View>
          <View>
            <FlatList 
                data = {courses}
                renderItem = {({ item }) => (
                    <Course item = {item} />
                )}
                keyExtractor = {item => item.key}
                style={styles.flatList}
            />
          </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    components: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20, 
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },

    buttons: {
        width: Dimensions.get('window').width * 1/4,
        backgroundColor: 'grey',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },

    categories: {
        padding: 12,
        fontSize: 25,
    },

    flatList: {
        flex: 1,
    },


    
  });
