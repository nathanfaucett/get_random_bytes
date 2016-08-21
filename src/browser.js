var isFunction = require("@nathanfaucett/is_function");


var globalCrypto = global.crypto || global.msCrypto,
    NativeUint8Array = typeof(Uint8Array) !== "undefined" ? Uint8Array : Array,
    getRandomBytes;


if (globalCrypto && isFunction(globalCrypto.getRandomValues)) {
    getRandomBytes = function getRandomBytes(size) {
        return globalCrypto.getRandomValues(new NativeUint8Array(size));
    };
} else {
    getRandomBytes = function getRandomBytes(size) {
        var bytes = new NativeUint8Array(size),
            i = -1,
            il = size - 1,
            r;

        while (i++ < il) {
            if ((i & 0x03) === 0) {
                r = Math.random() * 0x100000000;
            }
            bytes[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }

        return bytes;
    };
}


module.exports = getRandomBytes;
