---
title: Style Guide
tags:
    - general
    - reference
date: 2021-07-27
---

This is a reference doc for the markdown syntax used to render the content here.
It's a living document that will be updated as the styles change, along with liberal use of codeblocks. ;)

---

## Headers

<br>

# This is an H1

## This is an H2 header

### This is an H3 header

## Paragraphs

Standard paragraph text. Line break coming up.

Next paragraph in the list.

## Emphasis

This paragraph contains **bold text**.

This line contains _italic text_.

And this one is **_bold and italic_**.

## Blockquotes

> This blockquote also contains **bold**, _italic_, and **_bold italic_**.

### Blockquotes with multiple paragraphs

> This blockquote contains
>
> multiple paragraphs.

### Nested blockquotes

> This blockquote has
>
> > a nested blockquote.

### Blockquotes with other elements

> #### H4 in a blockquote as a title!
>
> -   First list object here.
> -   Followed by a second list object.
>
>     _Everything_ is going according to **plan**.

## Lists

### Ordered Lists

Have the lists numbered, they don't need to be in order specifically,
Just need to start with 1.

#### First is 1, 2, 3, 4.

1. First
2. Second
3. Third
4. Fourth

#### Second is 1, 2, 3, 1, 2, 4

1. First
2. Second
3. Third
    1. Third First
    2. Third Second
4. Fourth

### Unordered Lists

Dashes or Asterisks in front. Plus works as well, but will get formatted out.

-   one
-   two
-   three
-   four

*   one
*   two
*   three
*   four

### Starting Lists With Numbers

Numbers need to be escaped with \

1. 1982\ is the best year.
2. Some other stuff.

### Adding Elements In Lists

#### Paragraph in the middle of a list

-   This is the first list item.
-   Here's the second list item.

    I need to add another paragraph below the second list item.

-   And here's the third list item.

#### Blockquotes in the middle

-   This is the first list item.
-   Here's the second list item.

    > A blockquote would look great below the second list item.

-   And here's the third list item.

### Code

Codeblocks are denoted with `(backticks)

Single backticks present `code`

`` They can be `escaped` with a double code ``

### Codeblocks

Can be indented, but we'll stick to fencing with 3x `

```css
pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}
```

### Links

To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

Titles are included by double quotes in the url (). You can see it on hover.
< > create email links, we'll not do that here...

[sample link to google](https://www.google.com "This is the title")

### Images

Images can be referenced with !. We don't have any yet, so there's that.

In a codeblock for reference

```css
[![An old rock in the desert](/path/to/image.jpg "Shiprock, New Mexico by Beau Rogers")](link if needed)
```
