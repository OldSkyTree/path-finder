'use strict';

const {
    NARROW_WINDOW,
    SMALL_NARROW_WINDOW,
    INTERIOR_DOOR
} = require('../constants').penetrationProbabilities;

module.exports = {
    options: {
        directed: false
    },
    nodes: [
        { v: 'street', value: 1 },

        { v: 'W0.1', value: NARROW_WINDOW },
        { v: 'W0.2', value: SMALL_NARROW_WINDOW },
        { v: 'W0.3', value: SMALL_NARROW_WINDOW },
        { v: 'W0.4', value: SMALL_NARROW_WINDOW },
        { v: 'W0.5', value: SMALL_NARROW_WINDOW },
        { v: 'W0.6', value: SMALL_NARROW_WINDOW },
        { v: 'W0.7', value: SMALL_NARROW_WINDOW },
        { v: 'W0.8', value: SMALL_NARROW_WINDOW },
        { v: 'W0.9', value: NARROW_WINDOW },

        { v: 'D0.1', value: INTERIOR_DOOR },
        { v: 'D0.2', value: INTERIOR_DOOR },
        { v: 'D0.3', value: INTERIOR_DOOR },
        { v: 'D0.4', value: INTERIOR_DOOR },
        { v: 'D0.5', value: INTERIOR_DOOR },
        { v: 'D0.6', value: INTERIOR_DOOR },
        { v: 'D0.7', value: INTERIOR_DOOR },
        { v: 'D0.8', value: INTERIOR_DOOR },
        { v: 'D0.9', value: INTERIOR_DOOR },
        { v: 'D0.10', value: INTERIOR_DOOR },

        { v: 'stairs', value: 1 },
        { v: 'point', value: 1 }
    ],
    edges: [
        { v: 'street', w: 'W0.1', value: 'Цоколь' },
        { v: 'street', w: 'W0.2', value: 'Цоколь' },
        { v: 'street', w: 'W0.3', value: 'Цоколь' },
        { v: 'street', w: 'W0.4', value: 'Цоколь' },
        { v: 'street', w: 'W0.5', value: 'Цоколь' },
        { v: 'street', w: 'W0.6', value: 'Цоколь' },
        { v: 'street', w: 'W0.7', value: 'Цоколь' },
        { v: 'street', w: 'W0.8', value: 'Цоколь' },
        { v: 'street', w: 'W0.9', value: 'Цоколь' },

        { v: 'W0.1', w: 'D0.1', value: 'Холодная кладовая' },
        { v: 'W0.2', w: 'D0.1', value: 'Холодная кладовая' },

        { v: 'W0.3', w: 'D0.2', value: 'Коридор' },
        { v: 'D0.1', w: 'D0.2', value: 'Коридор' },

        { v: 'W0.4', w: 'D0.3', value: 'Топочная' },
        { v: 'D0.2', w: 'D0.3', value: 'Топочная' },

        { v: 'W0.5', w: 'D0.5', value: 'Раздевалка' },

        { v: 'W0.6', w: 'D0.6', value: 'Техническое помещение' },

        { v: 'W0.7', w: 'D0.8', value: 'Постирочная' },
        { v: 'D0.3', w: 'D0.8', value: 'Постирочная' },
        { v: 'D0.10', w: 'D0.8', value: 'Постирочная' },

        { v: 'D0.5', w: 'D0.9', value: 'Коридор' },
        { v: 'D0.6', w: 'D0.9', value: 'Коридор' },
        { v: 'D0.8', w: 'D0.9', value: 'Коридор' },
        { v: 'stairs', w: 'D0.9', value: 'Коридор' },

        { v: 'W0.8', w: 'D0.10', value: 'Тренажерная' },
        { v: 'W0.9', w: 'D0.10', value: 'Тренажерная' },

        { v: 'D0.9', w: 'point', value: 'Хозяйственное помещение' }
    ]
}