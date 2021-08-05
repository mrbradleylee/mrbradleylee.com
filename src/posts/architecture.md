---
title: Architecture
tags: general
---

As much as we'd like to avoid frameworks, they most definitely make life easier.
Here's a list of frameworks and plugins in use on this site.

---

## Backend

-   GitHub
-   Netlify
    -   Netlify provides the CI/CD on commits to the master.

## Frameworks

-   Node
-   11ty

## Plugins

-   sass

    -   Though there's not a lot of css here, it will scale better in the future
        with the ease of declaring variables.

-   @11ty/navigation
    -   Allows easy management of navigation through frontmatter. Styling can
        still be handled through \_includes.
-   @11ty/syntaxhighlighting + prism.js
    -   For no reason other than it looks cool.
