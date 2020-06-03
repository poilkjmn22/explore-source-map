const sourceMap = require('source-map');
const SourceMapConsumer = sourceMap.SourceMapConsumer

const path = require('path');
const fs = require('fs');

const rawSourceMap = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../resources/index.b2bebd1.js.map')).toString())

async function consumeSourceMap(){
  const whatever = await SourceMapConsumer.with(rawSourceMap, null, consumer => {
    console.log(consumer.sources);
    // [ 'http://example.com/www/js/one.js',
    //   'http://example.com/www/js/two.js' ]

    console.log(
      consumer.originalPositionFor({
        line: 1,
        column: 3785309
      })
    );
    // { source: 'http://example.com/www/js/two.js',
    //   line: 2,
    //   column: 10,
    //   name: 'n' }

    // console.log(
    //   consumer.generatedPositionFor({
    //     source: "http://example.com/www/js/two.js",
    //     line: 2,
    //     column: 10
    //   })
    // );
    // // { line: 2, column: 28 }
    //
    // consumer.eachMapping(function(m) {
    //   // ...
    // });

    return;
  });
}

consumeSourceMap();
