import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SongsList from "./tabs/SongsList";
import Playlists from "./tabs/Playslists";
import Profile from "./tabs/Profile";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faList, faMusic, faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faMusic, faList, faUser)
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={SongsList}
                           screenOptions={
                               {
                                   headerShown: false,
                                   tabBarActiveTintColor: '#FFAF36',
                                   tabBarInactiveTintColor: 'rgba(255, 255, 255, .8)',
                                   tabBarStyle: {
                                       backgroundColor: '#0D0C22',
                                       borderTopColor: 'transparent'
                                   }
                               }
                           }>
                <Tab.Screen name="SongsList"
                            component={SongsList}
                            options={{
                                tabBarIcon: ({color}) => (
                                    <FontAwesomeIcon icon="music" color={color} size={20}/>
                                ),
                                tabBarLabel: 'Chansons',
                                tabBarItemStyle: {paddingTop: 8},
                                tabBarLabelStyle: {paddingTop: 4}
                            }}
                />
                <Tab.Screen name="Playlists"
                            component={Playlists}
                            options={{
                                tabBarIcon: ({color}) => (
                                    <FontAwesomeIcon icon="list" color={color} size={20}/>
                                ),
                                tabBarLabel: 'Playlists',
                                tabBarItemStyle: {paddingTop: 8},
                                tabBarLabelStyle: {paddingTop: 4}
                            }}
                />
                <Tab.Screen name="Profile"
                            component={Profile}
                            options={{
                                tabBarIcon: ({color}) => (
                                    <FontAwesomeIcon icon="user" color={color} size={20}/>
                                ),
                                tabBarLabel: 'Profile',
                                tabBarItemStyle: {paddingTop: 8},
                                tabBarLabelStyle: {paddingTop: 4}
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
