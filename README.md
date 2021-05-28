# Ergoplatform Documentation Website

## Extending documentation

In order to add a new documantation page create `.md` file in `/docs` directory. Then add sidebar settings to the file headers:

`docs/hello.md`
```
+ ---
+ sidebar_label: "Hi!"
+ sidebar_position: 3
+ ---

# Hello

This is my **first Docusaurus document**!
```

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
