import * as React from 'react';
import {Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

function Profile() {
    return (
        <LinearGradient colors={['rgb(13, 12, 34)', 'rgb(18, 16, 60)']} style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Page de profile</Text>
            </View>
        </LinearGradient>
    );
}

export default Profile
