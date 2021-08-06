---
title: Visual Studio Code Setup
tags:
    - general
    - tools
date: 2021-08-05
---

As I've been exploring the Jamstack, I've come across a multitude of tools/frameworks/plugins
that have made workflows and productivity easier. This series will cover tools and
configurations/customizations for each, starting with <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a>. Strap in!

---

Everyone has preferred editors and IDEs, but VS Code works so well for front end.
It's quick to load and snappy to respond, assuming you don't go overboard on the plugins.
And even then, it's no slouch in the performance department.

VS Code functions not only as an awesome utility to write code, but also manage project trees
and canvases during front-end dev. Though it's well built out of the box, it's strength
lies in it's plugins and customization options. Let's take a look at the productivity
plugins that I use, since color themes are quite personal.

### <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier</a>

Prettier is a code formatter that standardizes the code I write for me. I haven't had the
experience of developing in a team yet, though I can see it's relative value there.
The only setting I've adjusted there was to set tabs to spaces 4 wide.

### <a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank">GitLens</a>

Git is pretty much the standard for modern SCCM, and is used in some shape or form for
all my projects. I have projects in GitHub, GitLab, and Azure DevOps and commit
information and visibility into repo status with gutters makes it easy to track my changes.
In a single developer environment, I only have myself to blame, however blame lines can be configured.
This would be the only setting I've changed, which was to remove the additional blame
headers.

### <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2" target="_blank">Bracket Pair Colorizer 2</a>

I don't do much JS (yet), but when I do have to fumble around in it, BPC2 is instrumental
in helping me keep track of where I am in functions. 11/10 for sure.

### [Language Specific Plugins](#)

Since I've been spending most of my time in HTML/CSS/Nunjucks, I use extensions that are helpful
there, such as <a href="https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek" target="_blank">CSS Peek</a> and <a href="https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css" target="_blank">HTML CSS Intellisense</a>, the former which allows me to open
an inline editor to modify classes directly from the HTML and the latter allows me to traverse
non traditional file structures by scanning the relative link tags. I don't find myself using
these too often outside of quick checks.

### [Syntax Definitions](#)

This is another one that's language dependent. While the out of the box support is
great for standard languages, templating languages such as Liquid and Nunjucks
usually need to be added. Prism.js is enabled here as well to show the HTML5 boilerplate
sample:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body></body>
</html>
```

### [Custom Snippets](#)

There are lots of snippet extensions out there for various languages, but sometimes
you just find yourself repeating these wacky combinations, like having to use HTML
link tags in Markdown to get things to open in a new page. Here's an example of this
specifically:

```javascript
    "Markdown HTML Links": {
        "scope": "markdown",
        "prefix": "mdlink",
        "body": ["<a href=\"\" target=\"_blank\"></a>"],
        "description": "Markdown link open in new page"
    }
```

outputs:

```html
<a href="" target="_blank"></a>
```

where all that's needed is to paste the address and link text.

## [Next Time...](#)

Thanks for sticking around this long, next time we'll cover my second most used
tool, the venerable Terminal...
