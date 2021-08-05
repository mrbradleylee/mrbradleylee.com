const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon"); // for dates
const markdownIt = require("markdown-it"); // for md rendering in excerpts

module.exports = function (eleventyConfig) {
    // copy _src/resources to _site/resources
    eleventyConfig.addWatchTarget("src/resources/sass");
    eleventyConfig.addPassthroughCopy("src/resources");

    // plugins
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(syntaxHighlight, {
        trim: true,
        lineSeparator: "\n",
    });

    //dates
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // excerpt support
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
    });

    // markdown support in excerpts
    eleventyConfig.addFilter("md", function (content = "") {
        return markdownIt({ html: true }).render(content);
    });

    // input dir: src - output dir: _site
    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};
