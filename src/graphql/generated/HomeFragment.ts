/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HomeFragment
// ====================================================

export interface HomeFragment_newGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_newGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_newGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HomeFragment_newGamesSection_highlight_background | null;
  float_image: HomeFragment_newGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface HomeFragment_newGamesSection {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: HomeFragment_newGamesSection_highlight | null;
}

export interface HomeFragment_popularGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_popularGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_popularGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HomeFragment_popularGamesSection_highlight_background | null;
  float_image: HomeFragment_popularGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface HomeFragment_popularGamesSection_games_developers {
  __typename: "Developer";
  name: string;
}

export interface HomeFragment_popularGamesSection_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_popularGamesSection_games {
  __typename: "Game";
  name: string;
  slug: string;
  developers: HomeFragment_popularGamesSection_games_developers[];
  price: number;
  cover: HomeFragment_popularGamesSection_games_cover | null;
}

export interface HomeFragment_popularGamesSection {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: HomeFragment_popularGamesSection_highlight | null;
  games: HomeFragment_popularGamesSection_games[];
}

export interface HomeFragment_upcomingGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_upcomingGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_upcomingGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HomeFragment_upcomingGamesSection_highlight_background | null;
  float_image: HomeFragment_upcomingGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface HomeFragment_upcomingGamesSection {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: HomeFragment_upcomingGamesSection_highlight | null;
}

export interface HomeFragment_freeGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_freeGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface HomeFragment_freeGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HomeFragment_freeGamesSection_highlight_background | null;
  float_image: HomeFragment_freeGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface HomeFragment_freeGamesSection {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: HomeFragment_freeGamesSection_highlight | null;
}

export interface HomeFragment {
  __typename: "Home";
  newGamesSection: HomeFragment_newGamesSection | null;
  popularGamesSection: HomeFragment_popularGamesSection | null;
  upcomingGamesSection: HomeFragment_upcomingGamesSection | null;
  freeGamesSection: HomeFragment_freeGamesSection | null;
}
