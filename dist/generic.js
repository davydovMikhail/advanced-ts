"use strict";
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'misha' }, { age: 22 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
console.log(withCount('word'));
console.log(withCount(['i', 'am', 'array']));
//# sourceMappingURL=generic.js.map