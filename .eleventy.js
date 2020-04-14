module.exports = function(config) {
    // Pass "assets" and "admin" folders through
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("admin");

    config.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("DDD");
    });
    
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
