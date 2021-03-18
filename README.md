# Unified Latin Input Text Tool

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

See the [deployed version on Github Pages](https://captainalan.github.io/latin-text/).

## Features to add

- [x] Select input mode
- [ ] Add appropriate lang-attribute on copy-pastable text
- [ ] Add copy button

## Deploying

I followed [this article on Medium](https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4) to deploy this app.


Provided I have the required programs installed, I just run two commands:

Build

```bash
ng build --prod --base-href "https://captainalan.github.io/latin-text/"
```

Deploy

```bash
ngh --dir=dist/latin-text/
```