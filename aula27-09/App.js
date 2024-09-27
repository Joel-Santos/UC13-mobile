import React, {useState} from 'react';
// import {motion} from 'frame-Motion'
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {
  const [img, setImage] = useState()


  return (
    <View style={styles.container}>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
