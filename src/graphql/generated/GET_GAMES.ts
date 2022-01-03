/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_GAMES
// ====================================================

export interface GET_GAMES_games_developers {
  __typename: "Developer";
  name: string;
}

export interface GET_GAMES_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GET_GAMES_games {
  __typename: "Game";
  name: string;
  slug: string;
  developers: GET_GAMES_games_developers[];
  price: number;
  cover: GET_GAMES_games_cover | null;
}

export interface GET_GAMES {
  games: GET_GAMES_games[];
}

export interface GET_GAMESVariables {
  limit: number;
}
