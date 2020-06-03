import "./styles/index.scss";
import axios from 'axios';
var encoder = require("axy-sourcemap-base64vlq");

// const enc = encoder.encode([25484, 7, 0]); // yjYzjYA
// const dec = encoder.decode("aACE"); //  [12345, 012345, 9]

// encoder.decode("Variable+Length+QuantitY"); // [-10, 13, -13349, -13 ... -12797139]

// console.log(enc);

axios.get('/resources/index.b2bebd1.js.map')
  .then(res => {
    // const startsWith = encoder.encode([3785310])
    // const vlqs = res.data.mappings.split(';')[0].split(',')
    const founds = res.data.mappings.split(';')[0].split(',').map(m => encoder.decode(m))
    console.dir(founds);
  })
