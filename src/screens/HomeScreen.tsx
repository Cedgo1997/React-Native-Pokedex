import React from 'react';
import { ActivityIndicator, Image, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();
    return (
        <>
            <Image
                source={require('./../assets/pokebola.png')}
                style={styles.pokeballBG}
            />
            <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                showsVerticalScrollIndicator={false}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                numColumns={2}
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        top: top + 20,
                        marginBottom: top + 20
                    }}>
                        Pokédex
                    </Text>
                )}
                ListFooterComponent={
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={20}
                        color="grey"
                    />
                }
            />
        </>
    );
};
