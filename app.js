const _ = require('lodash');

const Items = [1, [2, [3, [4, [5]]]]];

const newItems = _.flattenDeep(Items);

console.log(newItems);