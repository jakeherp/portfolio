# 4.7.0

## features

- **layout:** adds colour accent to background using blurred svg blob
- **nextjs:** upgrades next to 13.4 + other dependencies to latest

## fixes

- **recruiter-form:** fixes styling of submit button

# 4.6.0

## features

- **component-create-script:** re-adds hygen template for components
- **storybook:** re-implements storybook

## fixes

- **linting:** fixes linting errors

# 4.5.0

## features

- **services:** adds service component
- **services:** moves services into sanity
- **sanity:** adds vercel deploy plugin
- **dependencies:** updates all dependencies
- **work-experience:** improves ui

## fixes

- **a11y:** improves color contract
- **content-block:** updates link styling
- **case-study:** reduces width after box component changes
- **hooks-tests:** updates tests for hooks in react 18

## ci/cd

- implements pipeline to run unit tests on pull requests

## refactors

- **tailwind:** adds auto sorting off css classes with prettier

# 4.4.0

## features

- **sitemap:** adds dynamic sitemap
- **seo:** improves on-site seo

## fixes

- **skip-to-content:** fixes z-index issue
- **contact:** removes redirect

## documentation

- updates documentation in readme

# 4.3.1

## fixes

- **hero-section:** fixes mobile styling issue

# 4.3.0

## features

- **dependencies:** updates dependencies

## fixes

- **blog:** fixes date time formatting

## refactoring

- **fonts:** implements next/font
- **services:** adds illustrations

## styling

- updates styling
- **forms:** updates form styling

# 4.2.0

## features

- upgrades dependencies
- **analytics:** implements vercel analytics

## fixes

- **recruiter-signup:** fixes path to api route

# 4.1.0

## features

- **contact:** implements contact form api and page
- **sentry:** re-implements sentry error logging

# 4.0.2

## fixes

- **uses page:** adds page animation back

# 4.0.1

## fixes

- **generateStaticParams:** fixes implementation and exports static pages for blog posts and case studies

# 4.0.0

## 🎉 Major Version Release

### 🚀 Features

- Upgrades to Next.js 13
- Uses Next.js `app` directory
- Removes boilerplate and implements best practices closer to defaults
- Switches to Sanity for content management
- Adds public API routes to fetch data from Sanity

### 🐛 Bug Fixes

- Many performance improvements
- Improvements to Tailwind setup
- Simplifies eslint config and brings it in line with Next.js defaults

# 3.8.0

## features

- **mobile-menu:** accessibility improvements

# 3.7.0

## features

- updates content for 2022
- **accessibility:** improves accessibility

## fixes

- **config:** fixes inconsistent casing in path aliases

# 3.6.0

## features

- **pnpm:** switches to pnpm package manager

## fixes

- **jest:** fixes bug with module directories containing `.`
- **unset-value:** creates override to fix snyk error

# 3.5.1

## fixes

- **dependencies:** updates all dependencies to latest versions
- **salary-component:** improves accessibility and adds unit test
- fixes some unit tests

# 3.5.0

## features

- **salary:** adds salary component

## fixes

- upgrades dependencies
- fixes tests
- fixes ts errors after react 18 update

# 3.4.2

## fixes

- implemented case studies layout improvements

# 3.4.1

## fixes

- fixed layout issues on case studies pages
- fixed safari styling issues
- updated readme

# 3.4.0

## features

- added page for recruiters

# 3.3.0

## features

- fresh coat of paint
- updated to use latest version of dependencies

# 3.2.1

## fixes

- fixes eslint config

# 3.2.0

## features

- updates devDependencies
- adds blur placeholders to images

# 3.1.0

## features

- adds nprogress bar
- adds read time

# 3.0.0

## features

- **BREAKING CHANGE** removes gatsby and installs nextjs
- **theming** adds theming support
- **redux** adds redux for theme
- **api-routes** adds api routes for about page
- **layout** adds layout components
- **seo** adds seo head
- **navigation** adds mobile navigation
- **about-page** adds experience to about page
- **posts** adds mdx files
- **blog** adds blog overview page
- **blog** adds blog post pages
- updates to webpack 5
- adds error page
- adds custom meta tags to seo head component
- **portfolio** adds portfolio overview page
- **button** adds button component
- **portfolio** adds single portfolio item page

## fixes

- fixes some accessibility issues
