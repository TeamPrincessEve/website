var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var sass        = require('metalsmith-sass');
var assets      = require('metalsmith-assets');

var metalsmith = Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('src')
  .destination('public')
  .clean(true)
  .use(assets({
    source: 'src-assets',
    destination: '.'
  }))
  .use(sass({
    outputStyle: "expanded",
    outputDir: "css"
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    directory: 'src-layouts',
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
    console.log('Build finished!');
  });


