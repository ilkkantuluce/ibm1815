const yaml = require('js-yaml');
const htmlmin = require('html-minifier');
const moment = require('moment');

module.exports = (config) => {

  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));
  config.addPassthroughCopy('src/images');

  if (process.env.NODE_ENV === 'production') {
    config.addTransform('html-min', (content, outputPath) =>
      outputPath.endsWith('.html')
        ? htmlmin.minify(content, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          })
        : content
    );
  }

  // custom filters
  // https://www.11ty.dev/docs/filters/

  config.addFilter('readingTime', (value) => {
    var time = value / 100;
    var timeRoundedUp = time.toFixed(0);
    return timeRoundedUp + ' min read';
  });

  config.addFilter('isSVG', (value) => {
    if (value.endsWith('svg')){
      return true;
    }
  });

  config.addFilter('isGIF', (value) => {
    if (value.endsWith('gif')){
      return true;
    }
  });

  config.addFilter('isJPG', (value) => {
    if (value.endsWith('jpg')){
      return true;
    }
  });

  config.addFilter('isPNG', (value) => {
    if (value.endsWith('png')){
      return true;
    }
  });

  config.addFilter('imageCut', (value) => {
    var image = value.replace(/.jpg|.png|.gif|-375w.gif|-768w.gif|-1024w.gif|-1366w.gif|-2560w.gif|-375w.jpg|-768w.jpg|-1024w.jpg|-1366w.jpg|-2560w.jpg|-375w|-768w|-1024w|-1366w|-2560w|-375w.png|-768w.png|-1024w.png|-1366w.png|-2560w.png|-375|-768|-1024|-1366|-2560|-375w|-768w|-1024w|-1366w|-2560w/gi, '');
    return image;
  });

  config.addFilter('sectionIndex', (value) => {
    var index = ('0' + value).slice(-2);
    return index;
  });

  config.addFilter('removeWhitespaceAfterComma', (value) => {
    var value = value.replace(/\s*,\s*/g, ",");
    return value;
  });

  config.addFilter('formatDate', function(date) {
    return moment(date).format('YYYY-MM-DD');
  });

  config.addFilter('expiryDate', function(date) {
    return moment(date).add(4, 'years').format('YYYY-MM-DD');
  });

  // settings
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      data: 'data'
    },
    htmlTemplateEngine: 'njk'
  };
};