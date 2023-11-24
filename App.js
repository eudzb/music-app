import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SongsList from "./tabs/SongsList";
import Playlists from "./tabs/Playslists";
import Profile from "./tabs/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={SongsList}>
                <Tab.Screen name="Chansons" component={SongsList}/>
                <Tab.Screen name="Playlists" component={Playlists}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
