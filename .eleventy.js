module.exports = function (eleventyConfig) {
    // copy _src/resources to _site/resources
    eleventyConfig.addWatchTarget("src/resources/sass");
    eleventyConfig.addPassthroughCopy("src/resources");

    // input dir: src
    // output dir: _site
    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};
