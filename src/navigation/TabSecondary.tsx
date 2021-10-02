import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./StackNavigator";

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Navigator = () => {
    return (
        <Tab2.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}>
            <Tab2.Screen name="Home" component={SearchScreen} />
            <Tab2.Screen name="Pokemon" component={PokemonScreen} />
        </Tab2.Navigator>
    );
}