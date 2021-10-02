import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles as globalStyles } from '../theme/appTheme';

const { width } = Dimensions.get('screen');

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);

    const [term, setTerm] = useState('');

    useEffect(() => {
        if (term.trim().length === 0) {
            return setFilteredPokemon([]);
        }

        setFilteredPokemon(
            simplePokemonList.filter(pkmn => pkmn.name.toLowerCase().includes(term.toLowerCase()))
        )
    }, [term])

    if (isFetching) {
        return <Loading />
    }

    return (
        <View style={{
            flex: 1,
            marginTop: Platform.OS === 'ios' ? top : top + 10,
            marginHorizontal: 20
        }
        }>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: width - 40,
                    top: top + 10
                }} />

            <FlatList
                data={filteredPokemon}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                numColumns={2}
                ListHeaderComponent={(
                    <Text style={{
                        ...globalStyles.title,
                        ...globalStyles.globalMargin,
                        paddingBottom: 5,
                        marginTop: top + 70
                    }}>
                        {term}
                    </Text>
                )}
            />
        </View >
    );
};

