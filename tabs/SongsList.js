import * as React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import SongItem from "../components/SongItem";
import {songs} from "../data/Songs";

const SongsList = () => (
    <LinearGradient colors={['rgb(13, 12, 34)', 'rgb(18, 16, 60)']} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={songs}
                renderItem={({item}) => <SongItem song={item}/>}
                keyExtractor={item => item.id}
                style={styles.flatListContainer}
                ItemSeparatorComponent={() => <View style={{height: 4}} />}
            />
        </SafeAreaView>
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatListContainer: {
        flex: 1,
        padding: 16,
    }
});

export default SongsList
