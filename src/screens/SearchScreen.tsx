import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles as globalStyles } from '../theme/appTheme';

const { width } = Dimensions.get('screen');

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

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
            <SearchInput style={{
                position: 'absolute',
                zIndex: 999,
                width: width - 40,
                top: top + 10
            }} />

            <FlatList
                data={simplePokemonList}
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
                        Pokédex
                    </Text>
                )}
            />
        </View >
    );
};

