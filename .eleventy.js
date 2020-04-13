module.exports = function(eleventyConfig) {
    
    // Set Assets Folder 
    eleventyConfig.addPassthroughCopy("assets");

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