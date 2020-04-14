module.exports = function(config) {
    
    // Set Assets Folder 
    config.addPassthroughCopy("assets");

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