import * as React from 'react';
import {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import SongItem from "../components/SongItem";
import {songs} from "../data/Songs";
import {SearchBar} from '@rneui/themed';

const SongsList = () => {
    const [search, setSearch] = useState("");
    const [filteredSongs, setFilteredSongs] = useState([]);
    const updateSearch = (search) => {
        setSearch(search);
        let filtered = songs.filter(res => {
            return res.title.toLowerCase().includes(search.toLowerCase())
        });
        setFilteredSongs(filtered);
    };

    return (
        <LinearGradient colors={['rgb(13, 12, 34)', 'rgb(18, 16, 60)']} style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <SearchBar
                    placeholder="Rechercher une chanson"
                    onChangeText={updateSearch}
                    value={search}
                    round={true}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        padding: 16,
                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent'
                    }}
                    inputContainerStyle={{
                        backgroundColor: '#343351'
                    }}
                    inputStyle={{
                        color: 'rgba(255, 255, 255, .8)'
                    }}
                />

                {search && search.trim() !== '' ?
                    <FlatList
                        data={filteredSongs}
                        renderItem={({item}) => <SongItem song={item}/>}
                        keyExtractor={item => item.id}
                        style={styles.flatListContainer}
                        ItemSeparatorComponent={() => <View style={{height: 4}}/>}
                    /> :
                    <FlatList
                        data={songs}
                        renderItem={({item}) => <SongItem song={item}/>}
                        keyExtractor={item => item.id}
                        style={styles.flatListContainer}
                        ItemSeparatorComponent={() => <View style={{height: 4}}/>}
                    />
                }
            </SafeAreaView>
        </LinearGradient>
    );
}

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
