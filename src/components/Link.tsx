import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  PrismicLink,
  PrismicLinkProps,
  LinkProps as InternalLinkProps,
} from "@prismicio/react";

import { linkResolver } from "../linkResolver";

const GatsbyLinkShim = ({ href, ...props }: InternalLinkProps) => (
  <GatsbyLink to={href} {...props} />
);

export type LinkProps = PrismicLinkProps;

export const Link = (props: LinkProps): JSX.Element => (
  <PrismicLink
    linkResolver={linkResolver}
    internalComponent={GatsbyLinkShim}
    {...props}
  />
);
