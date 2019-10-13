'use strict';

const graphlib = require('@dagrejs/graphlib');
const _ = require('lodash');

const building = require('./building');
const { allDeepPaths, getPathWeight } = require('./utils');

const graph = graphlib.json.read(building);

for (const path of allDeepPaths(graph, 'f', 'z')) {
    console.log(_.map(path, (node) => graph.node(node)).join(' -> '));
    console.log(getPathWeight(graph, path));
};
