import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  PrismicLink,
  PrismicLinkProps,
  LinkProps as InternalLinkProps,
} from "@prismicio/react";

const GatsbyLinkShim = ({ href, ...props }: InternalLinkProps) => (
  <GatsbyLink to={href} {...props} />
);

export type LinkProps = PrismicLinkProps;

export const Link = (props: LinkProps): JSX.Element => (
  <PrismicLink internalComponent={GatsbyLinkShim} {...props} />
);
