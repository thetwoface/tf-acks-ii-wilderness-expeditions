export const ENCOUNTER_KIND = Object.freeze({
    NONE: 'No Encounter',
    CIVILIZED: 'Civilized Encounter',
    MONSTER: 'Monster Encounter',
    DANGEROUS_TERRAIN: 'Dangerous Terrain Encounter',
    VALUABLE_TERRAIN: 'Valuable Terrain Encounter',
    UNIQUE_TERRAIN: 'Unique Terrain Encounter',
});

export const MONSTER_RARITY = Object.freeze({
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare',
    VERY_RARE: 'Very Rare',
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
    BARRENS_TUNDRA: 'BARRENS_TUNDRA',
    DESERT: 'DESERT',
    RIVER: 'RIVER',
    RIVER_DESERT: 'RIVER_DESERT',
    RIVER_JUNGLE: 'RIVER_JUNGLE',
    GRASSLAND: 'GRASSLAND',
    GRASSLAND_SAVANNA: 'GRASSLAND_SAVANNA',
    GRASSLAND_STEPPE: 'GRASSLAND_STEPPE',
    SCRUBLAND_SPARSE: 'SCRUBLAND_SPARSE',
    SCRUBLAND_DENSE: 'SCRUBLAND_DENSE',
    FOREST_DECIDUOUS: 'FOREST_DECIDUOUS',
    FOREST_TAIGA: 'FOREST_TAIGA',
    HILLS: 'HILLS',
    MOUNTAINS_FORESTED_ROCKY: 'MOUNTAINS_FORESTED_ROCKY',
    MOUNTAINS_SNOWY: 'MOUNTAINS_SNOWY',
    MOUNTAINS_VOLCANIC: 'MOUNTAINS_VOLCANIC',
    JUNGLE: 'JUNGLE',
    SWAMP: 'SWAMP',
});

export const TERRAIN_OPTIONS = Object.freeze({
    [TERRAIN_ID.BARRENS]: 'TFWE.Terrain.B',
    [TERRAIN_ID.BARRENS_TUNDRA]: 'TFWE.Terrain.BT',
    [TERRAIN_ID.DESERT]: 'TFWE.Terrain.D',
    [TERRAIN_ID.RIVER]: 'TFWE.Terrain.R',
    [TERRAIN_ID.RIVER_DESERT]: 'TFWE.Terrain.RD',
    [TERRAIN_ID.RIVER_JUNGLE]: 'TFWE.Terrain.RJ',
    [TERRAIN_ID.GRASSLAND]: 'TFWE.Terrain.G',
    [TERRAIN_ID.GRASSLAND_SAVANNA]: 'TFWE.Terrain.GS',
    [TERRAIN_ID.GRASSLAND_STEPPE]: 'TFWE.Terrain.GST',
    [TERRAIN_ID.SCRUBLAND_SPARSE]: 'TFWE.Terrain.SS',
    [TERRAIN_ID.SCRUBLAND_DENSE]: 'TFWE.Terrain.SD',
    [TERRAIN_ID.FOREST_DECIDUOUS]: 'TFWE.Terrain.FD',
    [TERRAIN_ID.FOREST_TAIGA]: 'TFWE.Terrain.FT',
    [TERRAIN_ID.HILLS]: 'TFWE.Terrain.H',
    [TERRAIN_ID.MOUNTAINS_FORESTED_ROCKY]: 'TFWE.Terrain.MFR',
    [TERRAIN_ID.MOUNTAINS_SNOWY]: 'TFWE.Terrain.MS',
    [TERRAIN_ID.MOUNTAINS_VOLCANIC]: 'TFWE.Terrain.MV',
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
    [TERRAIN_ID.BARRENS_TUNDRA]: {
        uuid: 'RollTable.3bHPROhEfrW3iopt',
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
    [TERRAIN_ID.GRASSLAND_STEPPE]: {
        uuid: 'RollTable.ALi0Fgssk8WrAI1N',
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
    [TERRAIN_ID.MOUNTAINS_FORESTED_ROCKY]: {
        uuid: 'RollTable.48Ku2YMBfadKcIal',
    },
    [TERRAIN_ID.MOUNTAINS_SNOWY]: {
        uuid: 'RollTable.48Ku2YMBfadKcIal',
    },
    [TERRAIN_ID.MOUNTAINS_VOLCANIC]: {
        uuid: 'RollTable.48Ku2YMBfadKcIal',
    },
    [TERRAIN_ID.JUNGLE]: {
        uuid: 'RollTable.stk3qlpABFNdQ3Tq',
    },
    [TERRAIN_ID.SWAMP]: {
        uuid: 'RollTable.lAgKFiWk8VpeVeev',
    },
});

export const MONSTER_RARITY_BY_TERRITORY_LUT = Object.freeze({
    [TERRITORY_ID.CIVILIZED]: {
        uuid: 'RollTable.juPV4OVD0XvSzcLB',
    },
    [TERRITORY_ID.CIVILIZED_ROAD]: {
        uuid: 'RollTable.juPV4OVD0XvSzcLB',
    },
    [TERRITORY_ID.BORDERLANDS]: {
        uuid: 'RollTable.pCfSBGjd8hkTKy82',
    },
    [TERRITORY_ID.BORDERLANDS_ROAD]: {
        uuid: 'RollTable.pCfSBGjd8hkTKy82',
    },
    [TERRITORY_ID.OUTLANDS]: {
        uuid: 'RollTable.QUtuWDnf1bFIGQVJ',
    },
    [TERRITORY_ID.OUTLANDS_ROAD]: {
        uuid: 'RollTable.QUtuWDnf1bFIGQVJ',
    },
    [TERRITORY_ID.UNSETTLED]: {
        uuid: 'RollTable.s3hLO5SIPBSKB5Be',
    },
    [TERRITORY_ID.UNSETTLED_ROAD]: {
        uuid: 'RollTable.s3hLO5SIPBSKB5Be',
    },
});

export const MONSTER_ENCOUNTER_BY_TERRAIN_AND_RARITY_LUT = Object.freeze({
    [TERRAIN_ID.BARRENS]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.7k60UAkiYfd9NIVX' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.mDI9Zc6Jz0C48q5W' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.gDhLKhIHOp1dVsyr' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.Fav2TLssgW5cOA50' },
    },
    [TERRAIN_ID.BARRENS_TUNDRA]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.7k60UAkiYfd9NIVX' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.mDI9Zc6Jz0C48q5W' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.gDhLKhIHOp1dVsyr' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.Fav2TLssgW5cOA50' },
    },
    [TERRAIN_ID.DESERT]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.cdmdb3pzGxjfV1dz' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.KgJ4X3ZAImnh3mu0' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.lRdKHgLvul9rr6Cv' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.XpHxeztXur1IhIYp' },
    },
    [TERRAIN_ID.FOREST_DECIDUOUS]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.W3JVF2rk9jV0BvtP' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.ujhF8shxKPfxfNoR' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.sOrWteLFipC385bf' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.RXBviYxPm2TyvVAL' },
    },
    [TERRAIN_ID.FOREST_TAIGA]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.hXk5L1wBHoC328lb' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.nKvdWjcde6b6Bdp1' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.BpnKdSn0nQXe1JLp' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.etwF7pTixZTdGrfJ' },
    },
    [TERRAIN_ID.GRASSLAND]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.D5IVQJzWgITRqeTh' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.QJaK3ytKVvIty1VB' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.WUpCvyTyBnIxPEZm' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.ZpBAydQJe0JRfDQ5' },
    },
    [TERRAIN_ID.GRASSLAND]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.D5IVQJzWgITRqeTh' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.QJaK3ytKVvIty1VB' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.WUpCvyTyBnIxPEZm' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.ZpBAydQJe0JRfDQ5' },
    },
    [TERRAIN_ID.GRASSLAND_SAVANNA]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.cvXF4eMAf70istIc' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.CO1UsMdorQ3pEMcH' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.fP9ONn0ZBgHnePsd' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.S3k9UjlqW0D5hUrg' },
    },
    [TERRAIN_ID.GRASSLAND_STEPPE]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.yXMeP8Tzad4fk6zp' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.pOvvHOFVOb77uuXC' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.4F18KIsbeNfOwArH' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.PXg8alxN45Na6CWS' },
    },
    [TERRAIN_ID.HILLS]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.HHGGTCRAaiCPCEoK' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.nKGjucnprBHA1eop' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.No6nN3UbGOOAvKCj' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.D6fJW3QCVgJ6rALq' },
    },
    [TERRAIN_ID.JUNGLE]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.78Ece2aMMDhU7yoj' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.JWpWQMffXjFQABMt' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.6WSa2lzNA93AJshj' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.025S46jnRqKDIoaP' },
    },
    [TERRAIN_ID.MOUNTAINS_FORESTED_ROCKY]: {
        [MONSTER_RARITY.COMMON]: { uuid: 'RollTable.ev3ZBVjUHXpqjDo6' },
        [MONSTER_RARITY.UNCOMMON]: { uuid: 'RollTable.yrS05PO68NLs7hoO' },
        [MONSTER_RARITY.RARE]: { uuid: 'RollTable.EVc48B0Q471ss9mn' },
        [MONSTER_RARITY.VERY_RARE]: { uuid: 'RollTable.o6CpsmkKaUq5zRfq' },
    },
});
