var tape = require("tape"),
    getRandomBytes = require("..");


var NativeUint8Array = typeof(Uint8Array) !== "undefined" ? Uint8Array : Array;


tape("getRandomBytes(size: Number)", function(assert) {
    var bytes = getRandomBytes(16);

    assert.equal(bytes.length, 16);
    assert.equal(bytes instanceof NativeUint8Array, true);

    assert.end();
});
