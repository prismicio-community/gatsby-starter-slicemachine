/**
 * This file is used as the Prismic preview resolver page. The preview resolver
 * page routes editors from the Prismic writing room to a previewed page within
 * your app.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby#1.-add-a-preview-resolver-page
 */

import * as React from "react";
import { navigate, PageProps } from "gatsby";
import {
  withPrismicPreviewResolver,
  WithPrismicPreviewResolverProps,
} from "gatsby-plugin-prismic-previews";

type PreviewPageProps = PageProps & WithPrismicPreviewResolverProps;

const PreviewPage = ({ isPrismicPreview }: PreviewPageProps): JSX.Element => {
  React.useEffect(() => {
    // If a visitor lands on this page and they did not come from the Prismic
    // Writing Room, redirect them to the homepage.
    if (isPrismicPreview === false) {
      navigate("/");
    }
  }, [isPrismicPreview]);

  if (isPrismicPreview === true || isPrismicPreview === null) {
    return <p>Loading preview…</p>;
  } else {
    return <></>;
  }
};

export default withPrismicPreviewResolver(PreviewPage);
