import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { };

export const PokemonScreen = ({ route, navigation }: Props) => {

    const { simplePokemon, color } = route.params;

    return (
        <View>
            <Text style={{ color }}>{simplePokemon.name}</Text>
        </View>
    );
};
