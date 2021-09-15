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
 */

import * as React from "react";
import { graphql, PageProps } from "gatsby";
import {
  withPrismicPreview,
  WithPrismicPreviewProps,
} from "gatsby-plugin-prismic-previews";
import { SliceZone } from "@prismicio/react";

import { PageTemplateQuery } from "../types.generated";
import { repositoryConfigs } from "../prismicPreviews";

type PageTemplateProps = PageProps<PageTemplateQuery> &
  WithPrismicPreviewProps<PageTemplateQuery>;

const sliceZoneComponents = {};

const PageTemplate = ({ data }: PageTemplateProps) => (
  <SliceZone
    slices={data.prismicPage?.data.body}
    components={sliceZoneComponents}
  />
);

/**
 * When a Prismic preview session is active, `withPrismicPreview` will
 * automatically provide your template with updated preview content. As editors
 * edit and save content in the Prismic writing room, the page will
 * automatically refresh to display the edited content.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/blob/alpha/packages/gatsby-plugin-prismic-previews/docs/api-withPrismicPreview.md
 */
export default withPrismicPreview(PageTemplate, repositoryConfigs);

export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          #... on PrismicSharedSliceType {
          #  variation
          #}
        }
      }
    }
  }
`;
