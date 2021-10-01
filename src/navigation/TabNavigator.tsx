import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../screens/SearchScreen';
import { StackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                tabBarActiveTintColor: '#5856D6',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 0,
                    elevation: 0,
                    height: 60,
                    position: 'absolute'
                }
            }}>
            <Tab.Screen
                name="Home"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Icon name='list' size={30} color={color} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name='search' size={30} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}