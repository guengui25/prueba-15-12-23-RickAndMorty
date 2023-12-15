import { GraphQLError } from "graphql";

import { Character, Episode } from "../types.ts";

export const Query = {

    character: async (_: unknown, args: { id: string }): Promise<Character> => {
        
        const response = await fetch(`https://rickandmortyapi.com/api/character/${args.id}`);
        
        if(!response) throw new GraphQLError(`No character found with id ${args.id}`);
        
        const data = await response.json();

        const character: Character = {
            id: data.id,
            name: data.name,
            episode: data.episode
        }

        return character;
    },
    
    charactersByIds: async (_: unknown, args: { ids: number[] }): Promise<Character[]> => {
        
        // Uso el método join() de los arrays para modificar la entrada de Apollo y adaptarla a la API de Rick and Morty
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join

        const ids = args.ids.join();

        const response = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
        
        if(!response) throw new GraphQLError(`No characters found with id ${ids}`);
        
        const data = await response.json();

        return await data;
    }
    /*
    ,
    episode: async (_: unknown, args: { id: string }): Promise<Episode> => {
        
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${args.id}`);
        
        if(!response) throw new GraphQLError(`No episode found with id ${args.id}`);
        
        const data = await response.json();

        const episode: Episode = {
            id: data.id,
            name: data.name,
            characters: data.characters
        }

        return episode;
    }
    */

};