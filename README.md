# gatsby-starter-prismic-typescript

## Setup

If you do not have a Prismic repository, start at [**I do not have a Prismic repository**](#i-do-not-have-a-prismic-repository).

If you have an existing Prismic repository, skip ahead to [**I have an existing Prismic repository**](#i-have-an-existing-prismic-repository).

### I do not have a Prismic repository

1. Create a new Prismic repository. You can create an account during this process if you don't already have one.

   ```sh
   npx prismic-cli@latest new --folder . --force
   ```

### I have an existing Prismic repository

1. Delete the `custom_types` directory in the root of the project.

2. Create a `.env` file based on `.env.example` and update the values.

   ```sh
   cp .env.example .env
   ```

## Develop

Start Gatsby using the `develop` script:

```sh
npm run develop
```
