import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >

            {/* Types */}
            <View
                style={{
                    ...styles.container,
                    marginTop: 400
                }}
            >
                <Text style={styles.title}>
                    Types
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => {
                            return (
                                <Text
                                    style={{ ...styles.regularText, marginRight: 10 }}
                                    key={type.name}
                                >
                                    {type.name}
                                </Text>)
                        })
                    }
                </View>
                {/* Weight */}
                <Text style={styles.title}>
                    Weight
                </Text>
                <Text style={styles.regularText}>
                    {pokemon.weight / 10} kg
                </Text>

                {/* Sprites */}
                <View>
                    <Text style={styles.title}>Sprites</Text>
                </View>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={styles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={styles.basicSprite}
                    />
                </ScrollView>

                {/* Abilities */}
                <View>
                    <Text style={styles.title}>
                        Abilities
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            pokemon.abilities.map(({ ability }) => {
                                return (
                                    <Text
                                        style={{ ...styles.regularText, marginRight: 10 }}
                                        key={ability.name}
                                    >
                                        {ability.name}
                                    </Text>)
                            })
                        }
                    </View>
                </View>
                {/* Moves */}
                <View>
                    <Text style={styles.title}>
                        Moves
                    </Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            pokemon.moves.map(({ move }) => {
                                return (
                                    <Text
                                        style={{ ...styles.regularText, marginRight: 10 }}
                                        key={move.name}
                                    >
                                        {move.name}
                                    </Text>)
                            })
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 125,
        height: 125,
    }
});