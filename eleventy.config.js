export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/*");
  eleventyConfig.addPassthroughCopy("./src/media");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
