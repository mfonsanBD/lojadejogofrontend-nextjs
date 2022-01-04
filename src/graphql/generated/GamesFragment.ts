/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GamesFragment
// ====================================================

export interface GamesFragment_developers {
  __typename: "Developer";
  name: string;
}

export interface GamesFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GamesFragment {
  __typename: "Game";
  name: string;
  slug: string;
  developers: GamesFragment_developers[];
  price: number;
  cover: GamesFragment_cover | null;
}
