module.exports = function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("./src/css/app.css");
eleventyConfig.addPassthroughCopy("./src/media");
  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
};
