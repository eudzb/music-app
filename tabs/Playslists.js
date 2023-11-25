import * as React from 'react';
import {Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

function Playlists() {
    return (
        <LinearGradient colors={['rgb(13, 12, 34)', 'rgb(18, 16, 60)']} style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Playlists</Text>
            </View>
        </LinearGradient>
    );
}

export default Playlists
