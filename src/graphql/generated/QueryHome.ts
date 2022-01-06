/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_img {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  img: QueryHome_banners_img | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_sections_newGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_newGamesSection_highlight_background | null;
  float_image: QueryHome_sections_newGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_newGamesSection {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_newGamesSection_highlight | null;
}

export interface QueryHome_sections_popularGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_popularGamesSection_highlight_background | null;
  float_image: QueryHome_sections_popularGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_popularGamesSection_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_sections_popularGamesSection_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGamesSection_games {
  __typename: "Game";
  name: string;
  slug: string;
  developers: QueryHome_sections_popularGamesSection_games_developers[];
  price: number;
  cover: QueryHome_sections_popularGamesSection_games_cover | null;
}

export interface QueryHome_sections_popularGamesSection {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryHome_sections_popularGamesSection_highlight | null;
  games: QueryHome_sections_popularGamesSection_games[];
}

export interface QueryHome_sections_upcomingGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upcomingGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upcomingGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_upcomingGamesSection_highlight_background | null;
  float_image: QueryHome_sections_upcomingGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_upcomingGamesSection {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_upcomingGamesSection_highlight | null;
}

export interface QueryHome_sections_freeGamesSection_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGamesSection_highlight_float_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGamesSection_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_freeGamesSection_highlight_background | null;
  float_image: QueryHome_sections_freeGamesSection_highlight_float_image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_freeGamesSection {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_freeGamesSection_highlight | null;
}

export interface QueryHome_sections {
  __typename: "Home";
  newGamesSection: QueryHome_sections_newGamesSection | null;
  popularGamesSection: QueryHome_sections_popularGamesSection | null;
  upcomingGamesSection: QueryHome_sections_upcomingGamesSection | null;
  freeGamesSection: QueryHome_sections_freeGamesSection | null;
}

export interface QueryHome_newGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames {
  __typename: "Game";
  name: string;
  slug: string;
  developers: QueryHome_newGames_developers[];
  price: number;
  cover: QueryHome_newGames_cover | null;
}

export interface QueryHome_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcomingGames {
  __typename: "Game";
  name: string;
  slug: string;
  developers: QueryHome_upcomingGames_developers[];
  price: number;
  cover: QueryHome_upcomingGames_cover | null;
}

export interface QueryHome_freeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_freeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeGames {
  __typename: "Game";
  name: string;
  slug: string;
  developers: QueryHome_freeGames_developers[];
  price: number;
  cover: QueryHome_freeGames_cover | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  sections: QueryHome_sections | null;
  newGames: QueryHome_newGames[];
  upcomingGames: QueryHome_upcomingGames[];
  freeGames: QueryHome_freeGames[];
}

export interface QueryHomeVariables {
  date: any;
}
