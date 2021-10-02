import React from 'react';
import { ActivityIndicator, FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles as globalStyles } from '../theme/appTheme';

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    if (isFetching) {
        return (
            <View
                style={styles.activityContainer}
            >
                <ActivityIndicator size={50} color='grey' />
            </View >
        )
    }

    return (
        <View style={{
            flex: 1,
            marginTop: Platform.OS === 'ios' ? top : top + 10,
            marginHorizontal: 20
        }
        }>
            <SearchInput />

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
                        top: top + 20,
                        marginBottom: top + 20,
                        paddingBottom: 5
                    }}>
                        Pokédex
                    </Text>
                )}
            />



        </View >
    );
};

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
});