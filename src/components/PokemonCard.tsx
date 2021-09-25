import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const { width } = Dimensions.get('window')

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
        >
            <View style={{
                ...styles.cardContainer
            }}>
                {/* Pokemon Name and ID */}
                <Text style={styles.name}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: width * 0.4,
        marginBottom: 25,
        borderRadius: 10
    },
    name: {
        color: 'white',
        fontSize: 20,
        top: 20,
        left: 10
    }
});