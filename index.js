'use strict';

const graphlib = require('@dagrejs/graphlib');
const _ = require('lodash');
const asciichart = require('asciichart');

const {
    allDeepPaths,
    getPathWeight,
    getHouse,
    saveToFile,
    getPath
} = require('./utils');

const house = getHouse('./floors');

const graph = graphlib.json.read(house);

const paths = _.map(allDeepPaths(graph, 'street', 'point'), (path) => ({
    path,
    weight: getPathWeight(graph, path)
}));

const maxPathWeight = _.maxBy(paths, 'weight').weight;
console.log(maxPathWeight);
console.log(
    _.filter(paths, ({ path, weight }) => weight >= maxPathWeight)
        .map(({ path }) => getPath(graph, path))
);

const plot = _(paths)
    .sortBy()
    .groupBy((path) => path.weight.toFixed(3))
    .map((weights) => weights.length)
    .value();

console.log(asciichart.plot(
    _.fill(Array(100)).map(() => Math.random()),
    { height: 10 }
));

saveToFile('./out.txt',
    _(paths)
        .map('weight')
        .map(weight => weight.toFixed(10))
        .sort()
        .join('\n')
);
