module.exports = function(config) {
    // Pass "assets" and "admin" folders through
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("admin");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            includes: "includes"
        }
    }
}
