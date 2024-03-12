import React from "react";

type PageLayoutProp = {
  children: React.ReactNode;
};
type HamBurgerProps = {
  onClick: () => void;
};
type LinkType = {
  type: "anchor" | "router";
  linkName: string;
  link: string;
};
type ListingType = {
  mainListingImageSrc: string;
  otherImages: string[];
  listingLocation: string;
  listingPrice: string;
  NoOfBed: number;
  NoOfBath: number;
};
type FormFieldProps = {
  icon: React.FC;
  label: string;
  type: "number" | "text";
};
type ListingProp = ListingType;
type NavLinkProp = LinkType;
export type {
  PageLayoutProp,
  HamBurgerProps,
  LinkType,
  NavLinkProp,
  ListingType,
  ListingProp,
  FormFieldProps,
};
