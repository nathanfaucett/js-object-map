object-map
=======

object map for the browser and node.js


```javascript
var objectMap = require("@nathanfaucett/object-map");


objectMap({
        a: "a",
        b: "b",
        c: "c"
    },
    function(value, key, object) {
        return value + key;
    }
); === {
    a: "aa",
    b: "bb",
    c: "cc"
};
```
