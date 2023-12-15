import {Episode} from '../types.ts';
import { GraphQLError } from "graphql";

export const Character = {
    
    episode: async (parent: Character): Promise<Episode[]> => {
        const episodesPromises:Promise<Episode>[] = parent.episode.map(async element => {
            
            const response = await fetch(element);

            if(!response) throw new GraphQLError(`No episode found with id ${element}`);

            const data = await response.json();

            const episodio:Episode = {
                id: data.id,
                name: data.name,
                characters: data.characters,
            }

            return episodio;
        });

        const episodes:Episode[] = await Promise.all(episodesPromises);

        return episodes;
    }
};