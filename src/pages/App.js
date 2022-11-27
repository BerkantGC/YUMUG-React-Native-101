import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MovieList from '../components/MovieList/MovieList'

const App = () => {
  return(
    <SafeAreaView style={styles.all_main_container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>YU MUG - REACT NATIVE 101</Text>
      </View>
      <MovieList></MovieList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  all_main_container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding : 5
  },
  header: {
    width : '100%',
    alignItems: 'center',
  },
  headerText : {
    fontWeight : 'bold',
    fontSize : 20
  }
})
export default App;