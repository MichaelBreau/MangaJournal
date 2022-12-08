import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { color } from "react-native-reanimated";
import { MangaItem } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type MangaListItemProps = {
    mangaItem: MangaItem;
}

const MangaListItem = (props: MangaListItemProps) => {
    const { mangaItem } = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('Entry', { id: mangaItem.id, chap: mangaItem.chapterNum, arrId: mangaItem.arrId, rating: mangaItem.rating })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style = {styles.container}>
                <Text style={styles.textStyleTitle}> {mangaItem.id}</Text>
                <View style = {styles.botContainer}>
                    <Text style={styles.textStyleInfo}> Ch. {mangaItem.chapterNum} | </Text>
                    <Text style={styles.textStyleInfo}>{Math.round((new Date().getTime() - mangaItem.dateCreated)/86400000)} days</Text>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>  {mangaItem.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default MangaListItem;