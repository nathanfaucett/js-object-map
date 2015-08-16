var tape = require("tape"),
    objectMap = require("..");


tape("objectMap(object) creates a new object with the results of calling a provided function on every element in this object", function(assert) {
    assert.deepEquals(
        objectMap({
            a: "a",
            b: "b",
            c: "c"
        }, function(value, key) {
            return value + key;
        }), {
            a: "aa",
            b: "bb",
            c: "cc"
        }
    );
    assert.end();
});
