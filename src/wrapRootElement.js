/**
 * Implement Gatsby's Browser and SSR `wrapRootElement` API in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapRootElement
 *
 * NOTE: This export will also wrap all Storybook stories. See `../.storybook/preview`.
 */

import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { PrismicProvider } from "@prismicio/react";

import { linkResolver } from "./linkResolver";
import { repositoryConfigs } from "./prismicPreviews";

/**
 * This component is rendered for internal links when using `<PrismicLink>`.
 * It uses Gatsby's `<Link>` component for client-side transitions.
 */
const GatsbyLinkShim = ({ href, ...props }) => (
  <GatsbyLink to={href} {...props} />
);

/**
 * This API adds the following global React context providers:
 *
 * 1. PrismicProvider - Configures `@prismicio/react` components.
 * 2. PrismicPreviewProvider - Configures `gatsby-plugin-prismic-previews`.
 */
export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={GatsbyLinkShim}
  >
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
);
