# Inner Citadel

This is a guide for anyone who wants to have a solid plan when facing adversity,
find tranquility, and live a fulfilling life. Everything you read here has its
roots in ancient Stoic philosophy.

Go to https://travishorn.github.io/inner-citadel to see the guide.

## Installation

Make sure you have [git](https://git-scm.com/) and [Node.js](https://nodejs.org)
installed.

Clone this repository.

```sh
git clone https://github.com/travishorn/inner-citadel
```

Change into the directory.

```sh
cd inner-citadel
```

Install the dependencies.

```sh
npm install
```

## Development

Run the development server.

```sh
npm run dev
```

Create and edit the content of the site using Markdown files in the `content`
directory.

## Deployment

Build the site for production

```sh
npm run build
```

Deploy the built files in `.vuepress/dist` to your host.

A [GitHub Pages](https://pages.github.com/) workflow is included at
`.github/workflows/deploy.yml`, as well, if you'd like to host it there.

## License

The code is licensed under [the MIT
License](https://opensource.org/license/mit).

The written content in the `content` directory is licensed under [CC BY-SA
4.0](https://creativecommons.org/licenses/by-sa/4.0/).
