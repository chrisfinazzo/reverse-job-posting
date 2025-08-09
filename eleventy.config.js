export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/*");
  eleventyConfig.addPassthroughCopy("./src/css/style.min.css");
  eleventyConfig.addPassthroughCopy("./src/media");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
