'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

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
    for (const node of path) {
        pathWeight *= graph.node(node);
    }
    return pathWeight;
};

exports.getHouse = (pathToFloors) => {
    return fs.readdirSync(path.resolve(pathToFloors))
        .reduce((res, floorPath) => {
            const floor = require(path.resolve(pathToFloors, floorPath));
            res.options = _.defaultsDeep({}, res.options, floor.options);
            !res.nodes && (res.nodes = []);
            !res.edges && (res.edges = []);
            res.nodes = _.uniqBy(_.concat(res.nodes, floor.nodes), 'v');
            res.edges = _.concat(res.edges, floor.edges);
            return res;
        }, {});
}

exports.getBeautifulPath = (graph, path) => {
    const pathEdges = [];
    for (let i = 0; i < path.length - 1; i++) {
        pathEdges.push(graph.edge(path[i], path[i + 1]));
    }
    return pathEdges.join(' -> ');
};

exports.getPath = (graph, path) => {
    const fullPath = [];
    for (let i = 0; i < path.length - 1; i++) {
        fullPath.push(path[i]);
        fullPath.push(graph.edge(path[i], path[i + 1]));
    }
    fullPath.push(_.last(path));
    return fullPath.join(' -> ');
};

exports.saveToFile = (filePath, data) => {
    try {
        fs.appendFileSync(path.resolve(filePath), data);
    } catch (err) {
        console.error(err);
    }
}; 
