import React from 'react';
import { StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { useNavigation } from "@react-navigation/native";

let currentSize = global.mangaList.length;

export default function TabTwoScreen() {

  const [titleInput, onChangeTitle] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [ratingInput, onChangeRating] = React.useState(null);

  const navigation = useNavigation();

  // On click event: adds the info in text inputs to a new element in global array, clears input fields, and redirects to main screen.
  const onClick = () => {
    global.mangaList.push({ id: titleInput, arrId: currentSize, rating: ratingInput, chapterNum: number, dateCreated: new Date().getTime() });
    onChangeTitle(null);
    onChangeNumber(null);
    onChangeRating(null);
    currentSize++;
    navigation.navigate('TabOne')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}> Add New  (+)</Text>

      <TextInput
        style={styles.inputContainer}
        onChangeText={onChangeTitle}
        value={titleInput}
        placeholder='Title'
      />

        <TextInput
          style={styles.inputContainer}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          placeholder='Current Chapter'
        />

        <TextInput
          style={styles.inputContainer}
          onChangeText={onChangeRating}
          value={ratingInput}
          keyboardType="numeric"
          placeholder='Rating'
        />

        <TouchableWithoutFeedback style={styles.addButton} onPress={onClick}>
          <View style={styles.addButton}>
            <Text style={styles.text}> ADD </Text>
          </View>
        </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.itemBackgroundColor,
    width: '100%',
    height: '100%',
    padding: 15,
  },
  textBold: {
    color: Colors.dark.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
      color: Colors.dark.text,
      fontSize: 20,
      alignSelf: 'center',
  },
  inputContainer: {
      backgroundColor:Colors.dark.text,
      padding: 5,
      borderColor: Colors.dark.itemBackgroundColor,
      borderWidth: 5,
  },
  addButton: {
      backgroundColor: Colors.header.background,
      //width: 65,
      borderColor: Colors.dark.itemBackgroundColor,
      borderWidth: 5,
  },
});
