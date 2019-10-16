const fg = require("fast-glob");

// Search for Icons in icons folder
const iconImages = fg.sync("src/images/icons/*", { objectMode: true });

const output = [];
for (let image of iconImages) {
  const outputImage = {
    file: image.path.replace("src/", "")
  };
  output.push(outputImage);
}

console.log(output);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  eleventyConfig.addCollection("icons", collection => output);

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
