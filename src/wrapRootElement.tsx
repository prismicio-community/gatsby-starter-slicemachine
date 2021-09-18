/**
 * Implement Gatsby's Browser and SSR `wrapRootElement` API in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
 */

import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { PrismicProvider } from "@prismicio/react";

import { Link } from "./components/Link";
import { linkResolver } from "./linkResolver";
import { repositoryConfigs } from "./prismicPreviews";

// Adds a shared React Context for Prismic preview sessions.
export const wrapRootElement: NonNullable<GatsbyBrowser["wrapRootElement"]> = ({
  element,
}) => (
  <PrismicProvider internalLinkComponent={Link} linkResolver={linkResolver}>
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
