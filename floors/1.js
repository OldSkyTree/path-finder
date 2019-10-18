'use strict';

const {
    BARS_WINDOW,
    DOOR,
    INTERIOR_DOOR,
    MAIN_DOOR,
    GATES
} = require('../constants').penetrationProbabilities;

module.exports = {
    options: {
        directed: false
    },
    nodes: [
        { v: 'street', value: 1 },
        { v: 'W1.1', value: BARS_WINDOW },
        { v: 'W1.2', value: BARS_WINDOW },
        { v: 'W1.3', value: BARS_WINDOW },
        { v: 'W1.4', value: BARS_WINDOW },
        { v: 'W1.5', value: BARS_WINDOW },
        { v: 'W1.6', value: BARS_WINDOW },
        { v: 'W1.7', value: BARS_WINDOW },
        { v: 'W1.8', value: BARS_WINDOW },
        { v: 'W1.9', value: BARS_WINDOW },
        { v: 'W1.10', value: BARS_WINDOW },
        { v: 'W1.11', value: BARS_WINDOW },
        { v: 'W1.12', value: BARS_WINDOW },
        { v: 'W1.13', value: BARS_WINDOW },
        { v: 'W1.14', value: BARS_WINDOW },
        { v: 'W1.15', value: BARS_WINDOW },
        { v: 'W1.16', value: BARS_WINDOW },
        { v: 'W1.17', value: BARS_WINDOW },
        { v: 'W1.18', value: BARS_WINDOW },
        { v: 'D1.1', value: DOOR },
        { v: 'D1.2', value: DOOR },
        { v: 'D1.3', value: INTERIOR_DOOR },
        { v: 'D1.4', value: INTERIOR_DOOR },
        { v: 'D1.5', value: INTERIOR_DOOR },
        { v: 'D1.6', value: INTERIOR_DOOR },
        { v: 'D1.7', value: INTERIOR_DOOR },
        { v: 'D1.8', value: INTERIOR_DOOR },
        { v: 'D1.9', value: INTERIOR_DOOR },
        { v: 'D1.10', value: INTERIOR_DOOR },
        { v: 'D1.11', value: INTERIOR_DOOR },
        { v: 'D1.12', value: MAIN_DOOR },
        { v: 'D1.13', value: INTERIOR_DOOR },
        { v: 'D1.14', value: GATES },
        { v: 'stairs', value: 1 }
    ],
    edges: [
        { v: 'street', w: 'W1.1', value: '1-й этаж' },
        { v: 'street', w: 'W1.2', value: '1-й этаж' },
        { v: 'street', w: 'W1.3', value: '1-й этаж' },
        { v: 'street', w: 'W1.4', value: '1-й этаж' },
        { v: 'street', w: 'W1.5', value: '1-й этаж' },
        { v: 'street', w: 'W1.6', value: '1-й этаж' },
        { v: 'street', w: 'W1.7', value: '1-й этаж' },
        { v: 'street', w: 'W1.8', value: '1-й этаж' },
        { v: 'street', w: 'W1.9', value: '1-й этаж' },
        { v: 'street', w: 'W1.10', value: '1-й этаж' },
        { v: 'street', w: 'W1.11', value: '1-й этаж' },
        { v: 'street', w: 'W1.12', value: '1-й этаж' },
        { v: 'street', w: 'W1.13', value: '1-й этаж' },
        { v: 'street', w: 'W1.14', value: '1-й этаж' },
        { v: 'street', w: 'W1.15', value: '1-й этаж' },
        { v: 'street', w: 'W1.16', value: '1-й этаж' },
        { v: 'street', w: 'W1.17', value: '1-й этаж' },
        { v: 'street', w: 'W1.18', value: '1-й этаж' },

        { v: 'W1.1', w: 'D1.3', value: 'Веранда' },
        { v: 'W1.2', w: 'D1.3', value: 'Веранда' },
        { v: 'W1.3', w: 'D1.3', value: 'Веранда' },
        { v: 'W1.4', w: 'D1.3', value: 'Веранда' },
        { v: 'W1.5', w: 'D1.3', value: 'Веранда' },
        { v: 'W1.7', w: 'D1.3', value: 'Веранда' },

        { v: 'W1.1', w: 'W1.6', value: 'Веранда' },
        { v: 'W1.2', w: 'W1.6', value: 'Веранда' },
        { v: 'W1.3', w: 'W1.6', value: 'Веранда' },
        { v: 'W1.4', w: 'W1.6', value: 'Веранда' },
        { v: 'W1.5', w: 'W1.6', value: 'Веранда' },
        { v: 'W1.7', w: 'W1.6', value: 'Веранда' },

        { v: 'W1.1', w: 'W1.7', value: 'Веранда' },
        { v: 'W1.2', w: 'W1.7', value: 'Веранда' },
        { v: 'W1.3', w: 'W1.7', value: 'Веранда' },
        { v: 'W1.4', w: 'W1.7', value: 'Веранда' },
        { v: 'W1.5', w: 'W1.7', value: 'Веранда' },
        { v: 'W1.7', w: 'W1.7', value: 'Веранда' },

        { v: 'D1.1', w: 'D1.3', value: 'Веранда' },
        { v: 'D1.2', w: 'D1.3', value: 'Веранда' },

        { v: 'D1.1', w: 'W1.6', value: 'Веранда' },
        { v: 'D1.2', w: 'W1.6', value: 'Веранда' },

        { v: 'D1.1', w: 'W1.7', value: 'Веранда' },
        { v: 'D1.2', w: 'W1.7', value: 'Веранда' },

        { v: 'W1.6', w: 'D1.4', value: 'Кухня' },
        { v: 'W1.8', w: 'D1.4', value: 'Кухня' },
        { v: 'D1.3', w: 'D1.4', value: 'Кухня' },
        
        { v: 'W1.9', w: 'D1.5', value: 'Кухня' },
        
        { v: 'D1.5', w: 'D1.8', value: 'Коридор' },
        { v: 'D1.7', w: 'D1.8', value: 'Коридор' },
        
        { v: 'W1.10', w: 'D1.7', value: 'Комната' },
        
        { v: 'W1.11', w: 'D1.9', value: 'Бассейн' },
        { v: 'W1.12', w: 'D1.9', value: 'Бассейн' },
        { v: 'W1.13', w: 'D1.9', value: 'Бассейн' },
        { v: 'W1.14', w: 'D1.9', value: 'Бассейн' },
        
        { v: 'W1.7', w: 'D1.10', value: 'Гостинная' },
        { v: 'W1.15', w: 'D1.10', value: 'Гостинная' },
        { v: 'W1.16', w: 'D1.10', value: 'Гостинная' },
        { v: 'W1.17', w: 'D1.10', value: 'Гостинная' },
        
        { v: 'D1.4', w: 'D1.10', value: 'Гостинная' },
        
        { v: 'W1.18', w: 'stairs', value: 'Лестница' },
        
        { v: 'D1.8', w: 'stairs', value: 'Прихожая' },
        { v: 'D1.10', w: 'stairs', value: 'Прихожая' },
        { v: 'D1.12', w: 'stairs', value: 'Прихожая' },
        { v: 'D1.13', w: 'stairs', value: 'Прихожая' },
        
        { v: 'D1.14', w: 'D1.13', value: 'Гараж' },
    ]
}