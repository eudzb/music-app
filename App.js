import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SongsList from "./tabs/SongsList";
import Program from "./tabs/Program";
import Singers from "./tabs/Singers";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCalendarDays, faMusic, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import Song from "./pages/Song";

library.add(faMusic, faCalendarDays, faUserGroup)
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigatorTab1 = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Songslist" component={SongsList}/>
        <Stack.Screen name="Song" component={Song}/>
    </Stack.Navigator>
);

const StackNavigatorTab2 = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Program" component={Program}/>
    </Stack.Navigator>
);

const StackNavigatorTab3 = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Singers" component={Singers}/>
    </Stack.Navigator>
);

const TabNavigator = () => (
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
        <Tab.Screen name="SongsListTab"
                    component={StackNavigatorTab1}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesomeIcon icon="music" color={color} size={20}/>
                        ),
                        tabBarLabel: 'Chansons',
                        tabBarItemStyle: {paddingTop: 8},
                        tabBarLabelStyle: {paddingTop: 4}
                    }}
        />
        <Tab.Screen name="ProgramTab"
                    component={StackNavigatorTab2}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesomeIcon icon="calendar-days" color={color} size={20}/>
                        ),
                        tabBarLabel: 'Programme',
                        tabBarItemStyle: {paddingTop: 8},
                        tabBarLabelStyle: {paddingTop: 4}
                    }}
        />
        <Tab.Screen name="SingersTab"
                    component={StackNavigatorTab3}
                    options={{
                        tabBarIcon: ({color}) => (
                            <FontAwesomeIcon icon="user-group" color={color} size={20}/>
                        ),
                        tabBarLabel: 'Chanteurs',
                        tabBarItemStyle: {paddingTop: 8},
                        tabBarLabelStyle: {paddingTop: 4}
                    }}
        />
    </Tab.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    );
}
