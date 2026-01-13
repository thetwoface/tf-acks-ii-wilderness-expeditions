import WildernessExpeditions from './apps/wilderness-expeditions.mjs';

Hooks.once('init', function () {
    game.TFWE = {
        ui: {
            wildernessExpeditions: null,
        },
    };
    // TODO: register settings
    // TODO: register handlebars helpers
});

Hooks.once('setup', function () {
    if (game.user !== game.users.activeGM) {
        return;
    }

    Hooks.on('getSceneControlButtons', (controls) => {
        const targetControl = controls?.tokens;
        if (!targetControl) {
            return;
        }
        targetControl.tools.TFWEButton = {
            name: 'TFWEButton',
            title: 'TFWE.AppName',
            icon: 'fas fa-globe',
            button: true,
            visible: true,
            onChange: () => {
                if (!game.TFWE.ui.wildernessExpeditions) {
                    game.TFWE.ui.wildernessExpeditions = new WildernessExpeditions();
                }
                game.TFWE.ui.wildernessExpeditions.render(true);
            },
        };
    });
});
