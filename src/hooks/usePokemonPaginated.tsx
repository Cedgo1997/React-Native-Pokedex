import { useEffect, useRef } from 'react';
import { pokemonApi } from '../api/pokemonApi';

export const usePokemonPaginated = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async () => {
        const resp = await pokemonApi.get(nextPageUrl.current);
        console.log(JSON.stringify(resp.data, null, 2));
    }

    useEffect(() => {
        loadPokemons();
    }, []);

    return {  };

};
