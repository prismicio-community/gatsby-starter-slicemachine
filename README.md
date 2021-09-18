# gatsby-starter-slicemachine

A [Gatsby starter][gatsby-starters] pre-configured for [Prismic][prismic] and [Slice Machine][slice-machine] projects.

> ⚠️ This starter is in very early development and is not recommended for use. It is a look into how [Slice Machine][slice-machine] may be supported within Gatsby projects.

## Setup

Run the following commands to create a new project and Prismic repository.

```sh
# Bootstrap the project with the Prismic CLI
# You can login with your Prismic account or sign up within this command
npx prismic-cli@latest theme \
  --theme-url https://github.com/prismicio-community/gatsby-starter-slicemachine \
  --conf sm.json

# Navigate into the project directory
cd your-project-name

# Create a .env with Prismic-specific config
cp .env.example .env

# Edit the .env file with your Prismic repository name
# Set the access token if the repository is secured

# Start Slice Machine and Storybook
npm run sm
```

## Development

1. **To model content and develop [Slices][prismic-slices] using mocked data**<br/>
   Start [Slice Machine][slice-machine] and [Storybook][storybook] with the following command.

   ```sh
   npm run sm
   ```

2. **To develop with Gatsby**<br/>
   Once the Slice components are written, the site can be tested with real content by starting Gatsby.

   ```sh
   npm run develop
   ```

## Deployment

**Prismic Models**<br/>
Pushing content models to Prismic is done within Slice Machine. Clicking the "Push to Prismic" button in each model's editing page will deploy it to the Prismic repository.

**Gatsby Site**<br/>
The resulting site is a standard Gatsby app. It can be hosted like any other Gatsby app. [Netlify][netlify], [Gatsby Cloud][gatsby-cloud], and [Vercel][vercel] are great options.

<!-- Links -->

[gatsby-cloud]: https://www.gatsbyjs.com/products/cloud/
[gatsby-starters]: https://www.gatsbyjs.com/docs/starters/
[netlify]: https://www.netlify.com/
[prismic-custom-types]: https://prismic.io/docs/core-concepts/custom-types
[prismic-slices]: https://prismic.io/docs/core-concepts/slices
[prismic]: https://prismic.io/
[slice-machine]: https://www.slicemachine.dev/
[storybook]: https://storybook.js.org/
[vercel]: https://vercel.com/
