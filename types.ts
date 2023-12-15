export type Character = {
    id: number;
    name: string;
    episode: string[];
};

export type Episode = {
    id: number;
    name: string;
    characters: Character[]; //Cuidado con esta
};