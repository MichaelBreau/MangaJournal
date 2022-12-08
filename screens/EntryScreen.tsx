import React from 'react';
import { View, Text, TextInput, Pressable, Button, TouchableWithoutFeedback } from 'react-native';
import { StyleSheet } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Colors from '../constants/Colors';
import { useNavigation } from "@react-navigation/native";


const EntryScreen = () => {

    const route = useRoute();

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('TabOne')
    }

    const [number, onChangeNumber] = React.useState(null);
    const [ratingInput, onChangeRating] = React.useState(null);


    return (
        <View style={styles.container}> 
            <Text style={styles.textBold}> {route.params.id} </Text> 
            <View>
                <Text style ={styles.text}> Ch. {route.params.chap}</Text>
                <Text style={styles.text}> Rating: {route.params.rating}</Text>
            </View>

            <TextInput
                style={styles.inputContainer}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholder='Update Chapter'
            />

            <TextInput
                style={styles.inputContainer}
                onChangeText={onChangeRating}
                value={ratingInput}
                keyboardType="numeric"
                placeholder='Update Rating'
            />

            <TouchableWithoutFeedback style={styles.saveButton} onPress={onClick}>
                <View style={styles.saveButton}>
                    <Text style={styles.centerText}> SAVE </Text>
                </View>
            </TouchableWithoutFeedback>
     
        </View>
    )
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
    },
    centerText: {
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
    saveButton: {
        backgroundColor: Colors.header.background,
        borderColor: Colors.dark.itemBackgroundColor,
        borderWidth: 5,
    },
  });

export default EntryScreen;