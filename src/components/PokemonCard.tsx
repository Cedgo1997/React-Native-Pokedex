import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/core';


const { width } = Dimensions.get('window')

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const { navigate } = useNavigation();

    const getCardColor = async (color: string) => {
        const result = await ImageColors.getColors(color, {
            fallback: 'grey',
            cache: true,
            key: 'unique_key',
        });

        if (!isMounted.current) return;

        switch (result.platform) {
            case 'ios':
                setBgColor(result.background);
                break;
            case 'android':
                setBgColor(result.dominant!);
                break;
        }
        return () => {
            isMounted.current = false;
        }
    }

    useEffect(() => {
        getCardColor(pokemon.picture);
    }, [pokemon])

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('Pokemon' as never, {
                simplePokemon: pokemon,
                color: bgColor
            } as never)}
        >
            <View style={{
                ...styles.cardContainer,
                width: width * 0.4,
                backgroundColor: bgColor
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