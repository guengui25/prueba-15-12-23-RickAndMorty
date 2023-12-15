# INSTRUCCIONES
Se pide realizar una API GraphQL que de información sobre los personajes de Rick and Morty https://rickandmortyapi.com/graphql.

**NO HAY BASE DE DATOS**

## El schema GraphQL debe ser el siguiente

```graphql
type Character {
   id: ID!
   name: String!
   episode: [Episode!]!
}

type Episode {
  id: ID!
  name: String!
  characters: [Character!]!
}

type  Query {
   character(id: ID!): Character #devuelve un personaje según su id
   charactersByIds(ids: [ID!]!): [Character] #devuelve un array de personajes según sus ids
}
```

- Los datos se deben obtener mediante llamadas al API Rest de Rick and Morty : https://rickandmortyapi.com/documentation/#rest

- Nota: La profundidad de las queries en el API GraphQL de RickyMorty está limitada, sin embargo el API que debe realizar el alumno tendrá recursividad infinita