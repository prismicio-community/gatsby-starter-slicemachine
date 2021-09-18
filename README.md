# gatsby-starter-slicemachine

A [Gatsby starter][gatsby-starters] configured for [Prismic][prismic] and [Slice Machine][slice-machine] projects.

> This starter is in very early development and is not recommended for use. It is a look into how [Slice Machine][slice-machine] may be supported within Gatsby projects.

# Setup

Run the following commands to create a new project and Prismic repository.

```sh
# Bootstrap the project with the Prismic CLI
# You can login with your Prismic account or sign up within this command
npx prismic-cli@latest theme --theme-url https://github.com/prismicio-community/gatsby-starter-slicemachine --conf sm.json

# Navigate into the project directory
cd your-project-name

# Create a .env with Prismic-specific config
cp .env.example .env

# Edit the .env file with your Prismic repository name
# Set the access token if the repository is secured

# Start Slice Machine and Storybook
npm run sm
```

# Development

**To model content and develop using mocked data**<br/>
This command will start Slice Machine and Storybook. Slice Machine is used to model content using Custom Types and Slice. Storybook is used to develop React components for each Slice using mock content.

```sh
npm run sm
```

**To develop with Gatsby**<br/>
Once the Slice components are written, Gatsby can be started to test the site with real content.

```sh
npm run develop
```

# Deployment

**Prismic Models**: Pushing content models to Prismic is done within Slice Machine. Clicking the "Push to Prismic" button in each model's editing page will deploy them to the Prismic repository.

**Gatsby Site**: The result is a standard Gatsby site. It can be hosted like any other Gatsby site. [Netlify][netlify], [Gatsby Cloud][gatsby-cloud], and [Vercel][vercel] are great options.

<!-- Links -->

[gatsby-cloud]: https://www.gatsbyjs.com/products/cloud/
[gatsby-starters]: https://www.gatsbyjs.com/docs/starters/
[netlify]: https://www.netlify.com/
[prismic]: https://prismic.io/
[slice-machine]: https://www.slicemachine.dev/
[vercel]: https://vercel.com/
