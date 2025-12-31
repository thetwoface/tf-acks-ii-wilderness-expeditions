const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export default class WildernessExpeditions extends HandlebarsApplicationMixin(ApplicationV2) {
    static DEFAULT_OPTIONS = {
        id: 'tf-wilderness-expeditions-app',
        window: {
            icon: 'fas fa-globe',
            minimizable: true,
            resizable: true,
            title: 'TFWE.AppName',
        },
        position: {
            width: 400,
            height: 600,
        },
        classes: ['tfwe'],
        actions: {},
    };

    static PARTS = {
        main: {
            template: 'modules/tf-acks-ii-wilderness-expeditions/templates/wilderness-expeditions.hbs',
        },
    };

    async _prepareContext(options) {
        const context = await super._prepareContext(options);

        const territoryClassification = {
            cr: 'Civilized + Road',
            cbr: 'Civilized or Borderlands + Road',
            bor: 'Borderlands or Outlands + Road',
            our: 'Outlands or Unsettled + Road',
            u: 'Unsettled',
        };

        return Object.assign(context, {
            territoryClassification,
        });
    }
}
