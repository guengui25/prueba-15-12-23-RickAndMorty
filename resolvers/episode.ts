import {Character} from "../types.ts";
import { GraphQLError } from "graphql";

export const Episode = {
    
    characters: async (parent: Episode): Promise<Character[]> => {
        const charactersPromises:Promise<Character>[] = parent.characters.map(async element => {
            
            const response = await fetch(element);

            if(!response) throw new GraphQLError(`No character found with id ${element}`);

            const data = await response.json();

            const character:Character = {
                id: data.id,
                name: data.name,
                episode: data.episode,
            }

            return character;
        });

        const characters:Character[] = await Promise.all(charactersPromises);

        return characters;
    }
};
