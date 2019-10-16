'use strict';

const graphlib = require('@dagrejs/graphlib');
const _ = require('lodash');
const fs = require('fs');

const {
    allDeepPaths,
    getPathWeight,
    getFloors,
    getBeautifulPath
} = require('./utils');

const floors = getFloors('./floors');

_.forEach(floors, (floor, floorNum) => {
    console.log(`\nWE ARE ON ${floorNum} FLOOR`);

    const graph = graphlib.json.read(floor);
    
    const paths = allDeepPaths(graph, 'street', 'point');
    // console.log(paths.map(path => path.join(', ')));
    const maxPathWeight = _.max(paths.map((path) => getPathWeight(graph, path)));
    console.log(maxPathWeight);
    console.log(
        _.filter(paths, (path) => getPathWeight(graph, path) >= maxPathWeight)
            .map((path) => getBeautifulPath(graph, path))
    );  
});
