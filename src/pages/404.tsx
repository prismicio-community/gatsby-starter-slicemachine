/**
 * This file is used as the 404 page in your app. If users go to a URL that does
 * not exist within your app, they will be shown this page.
 *
 * This page is also used to support Prismic preview session when viewing
 * documents that have not been published.
 *
 * @see https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/
 * @see https://github.com/angeloashmore/gatsby-source-prismic/blob/alpha/packages/gatsby-plugin-prismic-previews/docs/api-withPrismicUnpublishedPreview.md
 */

import * as React from "react";
import { Link } from "gatsby";
import { withPrismicUnpublishedPreview } from "gatsby-plugin-prismic-previews";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

/**
 * When a Prismic preview session is active and an editor lands on the 404 page,
 * it means the app does not contain a page for the previewed document's URL
 * determined using your app's Link Resolver.
 *
 * `withPrismicUnpublishedPreview` will detect when a preview session is active
 * and try to display the previewed document using the configuration provided.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/blob/alpha/packages/gatsby-plugin-prismic-previews/docs/api-withPrismicUnpublishedPreview.md
 */
export default withPrismicUnpublishedPreview(NotFoundPage);
