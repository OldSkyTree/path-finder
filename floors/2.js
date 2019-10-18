'use strict';

const {
    WINDOW,
    INTERIOR_WINDOW,
    DOOR,
    INTERIOR_DOOR
} = require('../constants').penetrationProbabilities;

module.exports = {
    options: {
        directed: false
    },
    nodes: [
        { v: 'street', value: 1 },

        { v: 'W2.1', value: WINDOW },
        { v: 'W2.2', value: WINDOW },
        { v: 'W2.3', value: WINDOW },
        { v: 'W2.4', value: WINDOW },
        { v: 'W2.5', value: WINDOW },
        { v: 'W2.6', value: WINDOW },
        { v: 'W2.7', value: INTERIOR_WINDOW },
        { v: 'W2.8', value: WINDOW },
        { v: 'W2.9', value: WINDOW },
        { v: 'W2.10', value: WINDOW },
        { v: 'W2.11', value: WINDOW },
        { v: 'W2.12', value: WINDOW },
        { v: 'W2.13', value: WINDOW },
        { v: 'W2.14', value: WINDOW },
        { v: 'W2.15', value: WINDOW },
        { v: 'W2.16', value: WINDOW },
        { v: 'W2.17', value: WINDOW },

        { v: 'D2.1', value: INTERIOR_DOOR },
        { v: 'D2.2', value: INTERIOR_DOOR },
        { v: 'D2.3', value: INTERIOR_DOOR },
        { v: 'D2.4', value: INTERIOR_DOOR },
        { v: 'D2.5', value: INTERIOR_DOOR },
        { v: 'D2.6', value: INTERIOR_DOOR },
        { v: 'D2.7', value: INTERIOR_DOOR },
        { v: 'D2.8', value: INTERIOR_DOOR },
        { v: 'D2.9', value: INTERIOR_DOOR },
        { v: 'D2.10', value: DOOR },
        { v: 'D2.11', value: INTERIOR_DOOR },

        { v: 'stairs', value: 1 }
    ],
    edges: [
        { v: 'street', w: 'W2.1', value: '2-й этаж' },
        { v: 'street', w: 'W2.2', value: '2-й этаж' },
        { v: 'street', w: 'W2.3', value: '2-й этаж' },
        { v: 'street', w: 'W2.4', value: '2-й этаж' },
        { v: 'street', w: 'W2.5', value: '2-й этаж' },
        { v: 'street', w: 'W2.6', value: '2-й этаж' },
        { v: 'street', w: 'W2.7', value: '2-й этаж' },
        { v: 'street', w: 'W2.8', value: '2-й этаж' },
        { v: 'street', w: 'W2.9', value: '2-й этаж' },
        { v: 'street', w: 'W2.10', value: '2-й этаж' },
        { v: 'street', w: 'W2.11', value: '2-й этаж' },
        { v: 'street', w: 'W2.12', value: '2-й этаж' },
        { v: 'street', w: 'W2.13', value: '2-й этаж' },
        { v: 'street', w: 'W2.14', value: '2-й этаж' },
        { v: 'street', w: 'W2.15', value: '2-й этаж' },
        { v: 'street', w: 'W2.16', value: '2-й этаж' },
        { v: 'street', w: 'W2.17', value: '2-й этаж' },

        { v: 'street', w: 'D2.10', value: '2-й этаж' },

        { v: 'W2.1', w: 'D2.1', value: 'Веранда' },
        { v: 'W2.2', w: 'D2.1', value: 'Веранда' },
        { v: 'W2.3', w: 'D2.1', value: 'Веранда' },
        { v: 'W2.4', w: 'D2.1', value: 'Веранда' },
        { v: 'W2.5', w: 'D2.1', value: 'Веранда' },
        { v: 'W2.6', w: 'D2.1', value: 'Веранда' },

        { v: 'W2.1', w: 'W2.7', value: 'Веранда' },
        { v: 'W2.2', w: 'W2.7', value: 'Веранда' },
        { v: 'W2.3', w: 'W2.7', value: 'Веранда' },
        { v: 'W2.4', w: 'W2.7', value: 'Веранда' },
        { v: 'W2.5', w: 'W2.7', value: 'Веранда' },
        { v: 'W2.6', w: 'W2.7', value: 'Веранда' },

        { v: 'W2.8', w: 'D2.2', value: 'С/у' },

        { v: 'W2.9', w: 'D2.3', value: 'С/у' },

        { v: 'W2.9', w: 'D2.5', value: 'Спальня' },
        { v: 'W2.10', w: 'D2.5', value: 'Спальня' },
        { v: 'D2.3', w: 'D2.5', value: 'Спальня' },

        { v: 'W2.7', w: 'D2.6', value: 'Будуар' },
        { v: 'W2.11', w: 'D2.6', value: 'Будуар' },
        { v: 'D2.1', w: 'D2.6', value: 'Будуар' },

        { v: 'D2.2', w: 'D2.8', value: 'Коридор' },
        { v: 'D2.6', w: 'D2.8', value: 'Коридор' },
        { v: 'D2.7', w: 'D2.8', value: 'Коридор' },

        { v: 'W2.12', w: 'stairs', value: 'Коридор' },
        { v: 'D2.4', w: 'stairs', value: 'Коридор' },
        { v: 'D2.5', w: 'stairs', value: 'Коридор' },
        { v: 'D2.8', w: 'stairs', value: 'Коридор' },
        { v: 'D2.9', w: 'stairs', value: 'Коридор' },
        { v: 'D2.11', w: 'stairs', value: 'Коридор' },

        { v: 'W2.13', w: 'D2.7', value: 'Спальня' },
        { v: 'W2.14', w: 'D2.7', value: 'Спальня' },

        { v: 'W2.15', w: 'D2.9', value: 'Кабинет' },
        { v: 'D2.10', w: 'D2.9', value: 'Кабинет' },

        { v: 'W2.16', w: 'D2.11', value: 'Игровая' },
        { v: 'W2.17', w: 'D2.11', value: 'Игровая' },
    ]
}