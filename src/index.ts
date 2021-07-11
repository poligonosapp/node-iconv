import $ from "jquery";
// https://github.com/nodejs/string_decoder
// https://github.com/nodejs/readable-stream
import { Readable, Writable, Transform, Duplex, pipeline, finished } from 'readable-stream';

import { StringDecoder } from 'string_decoder';
const decoder = new StringDecoder('utf8');

decoder.write(Buffer.from([0xe2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xac])));

export { Readable, Writable, Transform, Duplex, pipeline, finished };
    




