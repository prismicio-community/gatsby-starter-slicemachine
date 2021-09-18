/**
 * This file contains a template for all Page documents in your Prismic
 * repository. It uses Gatsby's File System Route API to automatically generate
 * a page for each document using its `url` field. The `url` field is computed
 * using your app's Link Resolver.
 *
 * This template supports Prismic previews using the `withPrismicPreview` higher
 * order component.
 *
 * @see https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 * @see https://prismic.io/docs/technologies/previews-gatsby#2.-update-content-pages-and-templates
 */

import * as React from "react";
import { graphql, PageProps } from "gatsby";
import {
  withPrismicPreview,
  WithPrismicPreviewProps,
} from "gatsby-plugin-prismic-previews";
import { SliceZone } from "@prismicio/react";
import loadable from "@loadable/component";

import { PageTemplateQuery } from "../types.generated";

/**
 * Slice components for PrismicPageDataBody.
 *
 * Add or remove Slice types and their components in this map as the Slice
 * Zone's model is updated.
 */
const sliceZoneComponents = {
  text: loadable(() => import("../slices/Text")),
};

type PageTemplateProps = PageProps<PageTemplateQuery> &
  WithPrismicPreviewProps<PageTemplateQuery>;

const PageTemplate = ({ data }: PageTemplateProps) => (
  <SliceZone
    slices={data.prismicPage?.data.body}
    components={sliceZoneComponents}
  />
);

export default withPrismicPreview(PageTemplate);

// Add or remove Slice fragments in `body` as the Slice Zone's model is updated.
export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        body {
          ...PrismicText
        }
      }
    }
  }
`;
