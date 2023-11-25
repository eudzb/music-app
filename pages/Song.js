import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronLeft, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

library.add(faChevronLeft, faEllipsis)

const Song = ({route}) => {
    const navigation = useNavigation();
    const onBack = () => navigation.goBack();
    const song = route.params.song;

    return (
        <LinearGradient colors={['rgb(13, 12, 34)', 'rgb(18, 16, 60)']} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonContainer}
                                      onPress={onBack}>
                        <FontAwesomeIcon icon="chevron-left" color={'#FFAF36'} size={22}/>
                        <Text style={{color: '#FFAF36', fontSize: 18}}>Chansons</Text>
                    </TouchableOpacity>

                    <FontAwesomeIcon icon="ellipsis" color={'#FFAF36'} size={22}/>
                </View>

                <ScrollView style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleLabel}>{song.title}</Text>
                            <Text style={styles.pitchLabel}>#{song.pitch}</Text>
                        </View>

                        {song.chorus.length > 0 ?
                            <View style={styles.lyricsSection}>
                                <Text style={styles.lyricsTitleSection}>Refrain</Text>
                                <Text style={styles.lyricsMainSection}>{song.chorus}</Text>
                            </View> : null
                        }

                        {song.verses.length > 0 ?
                            <View style={styles.lyricsSection}>
                                <Text style={styles.lyricsTitleSection}>Couplet</Text>
                                <Text style={styles.lyricsMainSection}>{song.verses}</Text>
                            </View> : null
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 16
    },
    buttonContainer: {
        flexDirection: "row",
        columnGap: 8,
        alignContent: "center"
    },
    container: {
        alignItems: "flex-start",
        alignSelf: "flex-start",
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        rowGap: 40,
        padding: 16
    },
    titleContainer: {
        width: "100%",
        margin: "auto",
        alignItems: "center",
        rowGap: 8
    },
    titleLabel: {
        textAlign: "center",
        fontSize: 20,
        color: 'white',
        fontWeight: "500"
    },
    pitchLabel: {
        textAlign: "center",
        fontSize: 18,
        color: 'white',
        fontWeight: "400"
    },
    lyricsSection: {
        alignItems: "flex-start",
        rowGap: 8
    },
    lyricsTitleSection: {
        color: 'rgba(255, 255, 255, .9)',
        fontWeight: "500",
        fontSize: 18
    },
    lyricsMainSection: {
        color: 'rgba(255, 255, 255, .8)',
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 24
    }
});

export default Song;
