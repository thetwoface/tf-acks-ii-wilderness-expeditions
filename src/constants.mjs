export const ENCOUNTER_KIND = Object.freeze({
    NONE: 'No Encounter',
    CIVILIZED: 'Civilized Encounter',
    MONSTER: 'Monster Encounter',
    DANGEROUS_TERRAIN: 'Dangerous Terrain Encounter',
    VALUABLE_TERRAIN: 'Valuable Terrain Encounter',
    UNIQUE_TERRAIN: 'Unique Terrain Encounter',
});

export const TERRITORY_ID = Object.freeze({
    CIVILIZED_ROAD: 'CIVILIZED_ROAD',
    CIVILIZED: 'CIVILIZED',
    BORDERLANDS_ROAD: 'BORDERLANDS_ROAD',
    BORDERLANDS: 'BORDERLANDS',
    OUTLANDS_ROAD: 'OUTLANDS_ROAD',
    OUTLANDS: 'OUTLANDS',
    UNSETTLED_ROAD: 'UNSETTLED_ROAD',
    UNSETTLED: 'UNSETTLED',
});

export const TERRITORY_OPTIONS = Object.freeze({
    [TERRITORY_ID.CIVILIZED_ROAD]: 'TFWE.Territory.CR',
    [TERRITORY_ID.CIVILIZED]: 'TFWE.Territory.C',
    [TERRITORY_ID.BORDERLANDS_ROAD]: 'TFWE.Territory.BR',
    [TERRITORY_ID.BORDERLANDS]: 'TFWE.Territory.B',
    [TERRITORY_ID.OUTLANDS_ROAD]: 'TFWE.Territory.OR',
    [TERRITORY_ID.OUTLANDS]: 'TFWE.Territory.O',
    [TERRITORY_ID.UNSETTLED_ROAD]: 'TFWE.Territory.UR',
    [TERRITORY_ID.UNSETTLED]: 'TFWE.Territory.U',
});

export const TERRAIN_ID = Object.freeze({
    BARRENS: 'BARRENS',
    DESERT: 'DESERT',
    RIVER: 'RIVER',
    RIVER_DESERT: 'RIVER_DESERT',
    RIVER_JUNGLE: 'RIVER_JUNGLE',
    GRASSLAND: 'GRASSLAND',
    GRASSLAND_SAVANNA: 'GRASSLAND_SAVANNA',
    SCRUBLAND_SPARSE: 'SCRUBLAND_SPARSE',
    SCRUBLAND_DENSE: 'SCRUBLAND_DENSE',
    FOREST_DECIDUOUS: 'FOREST_DECIDUOUS',
    FOREST_TAIGA: 'FOREST_TAIGA',
    HILLS: 'HILLS',
    MOUNTAINS: 'MOUNTAINS',
    JUNGLE: 'JUNGLE',
    SWAMP: 'SWAMP',
});

export const TERRAIN_OPTIONS = Object.freeze({
    [TERRAIN_ID.BARRENS]: 'TFWE.Terrain.B',
    [TERRAIN_ID.DESERT]: 'TFWE.Terrain.D',
    [TERRAIN_ID.RIVER]: 'TFWE.Terrain.R',
    [TERRAIN_ID.RIVER_DESERT]: 'TFWE.Terrain.RD',
    [TERRAIN_ID.RIVER_JUNGLE]: 'TFWE.Terrain.RJ',
    [TERRAIN_ID.GRASSLAND]: 'TFWE.Terrain.G',
    [TERRAIN_ID.GRASSLAND_SAVANNA]: 'TFWE.Terrain.GS',
    [TERRAIN_ID.SCRUBLAND_SPARSE]: 'TFWE.Terrain.SS',
    [TERRAIN_ID.SCRUBLAND_DENSE]: 'TFWE.Terrain.SD',
    [TERRAIN_ID.FOREST_DECIDUOUS]: 'TFWE.Terrain.FD',
    [TERRAIN_ID.FOREST_TAIGA]: 'TFWE.Terrain.FT',
    [TERRAIN_ID.HILLS]: 'TFWE.Terrain.H',
    [TERRAIN_ID.MOUNTAINS]: 'TFWE.Terrain.M',
    [TERRAIN_ID.JUNGLE]: 'TFWE.Terrain.J',
    [TERRAIN_ID.SWAMP]: 'TFWE.Terrain.S',
});

export const ENCOUNTER_BY_TERRITORY_LUT = Object.freeze({
    [TERRITORY_ID.CIVILIZED_ROAD]: {
        uuid: 'RollTable.1iBOlQsirKqvCMD1', // 1. Civilized + Road
    },
    [TERRITORY_ID.CIVILIZED]: {
        uuid: 'RollTable.SJChY6u2Q7HbhPzK', // 2. Civilized Or Borderlands + Road
    },
    [TERRITORY_ID.BORDERLANDS_ROAD]: {
        uuid: 'RollTable.SJChY6u2Q7HbhPzK', // 2. Civilized Or Borderlands + Road
    },
    [TERRITORY_ID.BORDERLANDS]: {
        uuid: 'RollTable.90IJ7CIHviyALM2k', // 3. Borderlands Or Outlands + Road
    },
    [TERRITORY_ID.OUTLANDS_ROAD]: {
        uuid: 'RollTable.90IJ7CIHviyALM2k', // 3. Borderlands Or Outlands + Road
    },
    [TERRITORY_ID.OUTLANDS]: {
        uuid: 'RollTable.Td8zUMAUly4Lwv5Z', // 4. Outlands Or Unsettled + Road
    },
    [TERRITORY_ID.UNSETTLED_ROAD]: {
        uuid: 'RollTable.Td8zUMAUly4Lwv5Z', // 4. Outlands Or Unsettled + Road
    },
    [TERRITORY_ID.UNSETTLED]: {
        uuid: 'RollTable.KCcjvNPwshOOpZM2', // 5. Unsettled
    },
});

export const CIVILIZED_ENCOUNTERS_LUT = Object.freeze({
    [TERRAIN_ID.BARRENS]: {
        uuid: 'RollTable.5voMMsucskNRZUPO',
    },
    [TERRAIN_ID.DESERT]: {
        uuid: 'RollTable.jteajCPag3G4qnBF',
    },
    [TERRAIN_ID.RIVER]: {
        uuid: 'RollTable.07ZsnYXIf2CjAM9S',
    },
    [TERRAIN_ID.RIVER_DESERT]: {
        uuid: 'RollTable.4qgexk6VTRH25gc0',
    },
    [TERRAIN_ID.RIVER_JUNGLE]: {
        uuid: 'RollTable.wy87zhAnHAtcGhtz',
    },
    [TERRAIN_ID.GRASSLAND]: {
        uuid: 'RollTable.ALi0Fgssk8WrAI1N',
    },
    [TERRAIN_ID.GRASSLAND_SAVANNA]: {
        uuid: 'RollTable.EYvzGtGrN9boOwZ9',
    },
    [TERRAIN_ID.SCRUBLAND_SPARSE]: {
        uuid: 'RollTable.b8nrfZckaV6TlsIp',
    },
    [TERRAIN_ID.SCRUBLAND_DENSE]: {
        uuid: 'RollTable.jtNRdP59ggDP3dZx',
    },
    [TERRAIN_ID.FOREST_DECIDUOUS]: {
        uuid: 'RollTable.9H5vUNR9u5FzSWxW',
    },
    [TERRAIN_ID.FOREST_TAIGA]: {
        uuid: 'RollTable.R4wORUuQcmj5TLE0',
    },
    [TERRAIN_ID.HILLS]: {
        uuid: 'RollTable.mndwBBygQFmePCnh',
    },
    [TERRAIN_ID.MOUNTAINS]: {
        uuid: 'RollTable.48Ku2YMBfadKcIal',
    },
    [TERRAIN_ID.JUNGLE]: {
        uuid: 'RollTable.stk3qlpABFNdQ3Tq',
    },
    [TERRAIN_ID.SWAMP]: {
        uuid: 'RollTable.lAgKFiWk8VpeVeev',
    },
});
