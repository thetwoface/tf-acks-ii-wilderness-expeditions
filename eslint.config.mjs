import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

const styleConfig = stylistic.configs.customize({
    jsx: false,
    indent: 4,
    semi: true,
});

const foundryVttGlobals = {
    Hooks: 'readonly',
    game: 'readonly',
    foundry: 'readonly',
};

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {
            js,
            '@stylistic': stylistic,
        },
        extends: ['js/recommended', styleConfig],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...foundryVttGlobals,
            },
        },
    },
]);
