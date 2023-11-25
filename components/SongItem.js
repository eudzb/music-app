import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";

library.add(faEllipsis)

const SongItem = ({song}) => {
    const navigation = useNavigation();
    const onSongPressed = () => {
        navigation.navigate('Song', {song: song});
    };

    return (
        <TouchableOpacity title={song.title}
                          activeOpacity={.7}
                          style={styles.container}
                          onPress={onSongPressed}>
            <Text style={styles.element}>{song.title}</Text>
            <FontAwesomeIcon icon="ellipsis" style={styles.element}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1938',
        width: "100%",
        padding: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    element: {
        color: 'rgba(255, 255, 255, .9)'
    }
});

export default SongItem
