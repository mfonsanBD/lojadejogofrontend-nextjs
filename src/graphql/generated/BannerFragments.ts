/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragments
// ====================================================

export interface BannerFragments_img {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragments_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragments_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface BannerFragments {
  __typename: "Banner";
  img: BannerFragments_img | null;
  title: string;
  subtitle: string;
  button: BannerFragments_button | null;
  ribbon: BannerFragments_ribbon | null;
}
