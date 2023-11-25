import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

library.add(faEllipsis)

const SongItem = ({song}) => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.element}>{song.title}</Text>
        <FontAwesomeIcon icon="ellipsis" style={styles.element}/>
    </TouchableOpacity>
);

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
