'use strict';

const _ = require('lodash');

exports.allDeepPaths = function allDeepPaths(graph, path, endNode) {
    let result = [];
    if (!_.isArray(path)) {
        path = [path];
    }
    
    if (_.last(path) == endNode) return [path];

    const nodes = _.difference(graph.neighbors(_.last(path)), path.slice(0, -1));
    for (const node of nodes) {
        result = _.concat(result, allDeepPaths(graph, _.concat(path, node), endNode));
    }

    return result;
};

exports.getPathWeight = (graph, path) => {
    let pathWeight = 1;
    for (let i = 0; i < path.length - 1; i++) {
        pathWeight *= graph.edge(path[i], path[i + 1]);
    }
    return pathWeight;
};