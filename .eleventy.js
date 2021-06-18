const pluginSass = require('eleventy-plugin-sass')
const yaml = require('js-yaml')

module.exports = function config(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass)
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents))

  return {
    dir: {
      input: 'src',
    },
  }
}
