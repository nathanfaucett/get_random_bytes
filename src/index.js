var crypto = require("crypto");


var hasUint8Array = typeof(Uint8Array) !== "undefined",
    NativeUint8Array = hasUint8Array ? Uint8Array : Array,
    BYTES_PER_ELEMENT = hasUint8Array ? NativeUint8Array.BYTES_PER_ELEMENT : 1,
    bufferToUint8Array;


module.exports = getRandomBytes;


function getRandomBytes(size) {
    return bufferToUint8Array(crypto.randomBytes(size));
}


if (hasUint8Array) {
    bufferToUint8Array = function bufferToUint8Array(buffer) {
        return new NativeUint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength / BYTES_PER_ELEMENT);
    };
} else {
    bufferToUint8Array = function bufferToUint8Array(buffer) {
        var size = buffer.length,
            array = new NativeUint8Array(size),
            i = size;

        while (i--) {
            array[i] = buffer[i];
        }

        return array;
    };
}
