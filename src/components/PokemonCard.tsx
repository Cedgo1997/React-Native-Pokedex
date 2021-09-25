import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

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
            <View style={styles.pokeballContainer}>
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />
            </View>
            <FadeInImage
                uri={pokemon.picture}
                style={
                    styles.pokemonImage
                }
            />
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
        borderRadius: 10,
    },
    name: {
        color: 'white',
        fontSize: 20,
        top: 20,
        left: 10
    },
    pokeball: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 25,
        right: -15,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: 2,
        bottom: 10
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 25,
        right: 10,
        opacity: 0.5,
        overflow: 'hidden',
    }
});