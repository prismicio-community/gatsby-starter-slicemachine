import * as React from "react";
import { PrismicProvider } from "@prismicio/react";

import { Link } from "../src/components/Link";
import { linkResolver } from "../src/linkResolver";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <PrismicProvider linkResolver={linkResolver} internalLinkComponent={Link}>
      <Story />
    </PrismicProvider>
  ),
];
