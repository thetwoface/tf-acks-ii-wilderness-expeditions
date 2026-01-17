import {
    CIVILIZED_ENCOUNTERS_LUT,
    ENCOUNTER_BY_TERRITORY_LUT,
    ENCOUNTER_KIND,
    MONSTER_ENCOUNTER_BY_TERRAIN_AND_RARITY_LUT,
    MONSTER_RARITY_BY_TERRITORY_LUT,
    TERRAIN_OPTIONS,
    TERRITORY_OPTIONS,
} from '../constants.mjs';

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export default class WildernessExpeditions extends HandlebarsApplicationMixin(ApplicationV2) {
    static DEFAULT_OPTIONS = {
        id: 'tf-wilderness-expeditions-app',
        window: {
            icon: 'fas fa-globe',
            minimizable: true,
            resizable: true,
            title: 'TFWE.AppName',
            contentClasses: ['standard-form'],
        },
        position: {
            width: 550,
            height: 305,
        },
        classes: ['tfwe'],
        actions: {
            generateEncounter: WildernessExpeditions.#generateEncounter,
        },
    };

    static PARTS = {
        main: {
            template: 'modules/tf-acks-ii-wilderness-expeditions/templates/wilderness-expeditions.hbs',
            classes: ['standard-form'],
        },
    };

    /**
     *
     * @param {PointerEvent} event
     * @param {HTMLElement} target
     */
    static async #generateEncounter(event, target) {
        /** @type {HTMLFieldSetElement} */
        const fieldset = target.closest('fieldset[name="wildernessEncounters"]');
        /** @type {HTMLSelectElement} */
        const territorySelect = fieldset.elements['territorySelect'];
        /** @type {HTMLSelectElement} */
        const terrainSelect = fieldset.elements['terrainSelect'];

        const territory = territorySelect.value;
        const terrain = terrainSelect.value;
        const tableData = ENCOUNTER_BY_TERRITORY_LUT[territory];
        const table = await foundry.utils.fromUuid(tableData.uuid);
        const result = await table.draw({
            displayChat: true,
            recursive: true,
            rollMode: 'gmroll',
        });

        /** @type {string} */
        const encounterKind = result.results[0]?.name ?? 'Unknown Encounter Type';

        switch (encounterKind) {
            case ENCOUNTER_KIND.CIVILIZED: {
                const encounterTableData = CIVILIZED_ENCOUNTERS_LUT[terrain];
                const encounterTable = await foundry.utils.fromUuid(encounterTableData.uuid);
                await encounterTable.draw({
                    displayChat: true,
                    recursive: true,
                    rollMode: 'gmroll',
                });
                break;
            }
            case ENCOUNTER_KIND.MONSTER: {
                const monsterRarityTableData = MONSTER_RARITY_BY_TERRITORY_LUT[territory];
                const monsterRarityTable = await foundry.utils.fromUuid(monsterRarityTableData.uuid);
                const monsterRarityResult = await monsterRarityTable.draw({
                    displayChat: true,
                    recursive: true,
                    rollMode: 'gmroll',
                });
                /** @type {string} */
                const monsterRarity = monsterRarityResult.results[0]?.name;
                const monsterTableData = MONSTER_ENCOUNTER_BY_TERRAIN_AND_RARITY_LUT[terrain][monsterRarity];
                const monsterTable = await foundry.utils.fromUuid(monsterTableData.uuid);
                await monsterTable.draw({
                    displayChat: true,
                    recursive: true,
                    rollMode: 'gmroll',
                });
                break;
            }
            case ENCOUNTER_KIND.NONE:
                // do nothing
                break;
            case 'Unknown Encounter Type':
            default:
                foundry.ui.notifications.error(`${game.i18n.localize('TFWE.Error.UnknownEncounterType')} ${encounterKind}`);
                break;
        }
    }

    async _prepareContext(options) {
        const context = await super._prepareContext(options);

        return Object.assign(context, {
            territoryOptions: TERRITORY_OPTIONS,
            terrainOptions: TERRAIN_OPTIONS,
        });
    }
}
