import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { };

export const PokemonScreen = ({ route, navigation }: Props) => {

    const { simplePokemon, color } = route.params;
    const { name, id } = simplePokemon;

    const { top } = useSafeAreaInsets();

    const { pokemon, isLoading } = usePokemon(id);

    return (
        <View style={{ flex: 1 }}>
            {/* Header Container */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                {/* Back button */}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        color='white'
                        size={30}
                    />
                </TouchableOpacity>
                {/* Pokemon Name */}
                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 45
                    }}
                >{name + '\n'}#{id}</Text>
                {/* white Pokeball */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />
                <FadeInImage uri={simplePokemon.picture} style={styles.pokemonImage} />
            </View>

            {/* Details and loading */}
            <View style={styles.loadingIndicator}>
                <ActivityIndicator
                    color={color}
                    size={50}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});