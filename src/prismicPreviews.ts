/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/tree/alpha/packages/gatsby-plugin-prismic-previews
 */

import {
  componentResolverFromMap,
  PrismicUnpublishedRepositoryConfigs,
} from "gatsby-plugin-prismic-previews";
import loadable from "@loadable/component";

import { linkResolver } from "./linkResolver";

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `withPrismicPreview` and
 * `withPrismicUnpublishedPreview` higher order components.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/tree/alpha/packages/gatsby-plugin-prismic-previews#content-pages-and-templates
 */
export const repositoryConfigs: PrismicUnpublishedRepositoryConfigs = [
  {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME!,
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: loadable(() => import("./pages/{PrismicPage.url}")),
    }),
  },
];
