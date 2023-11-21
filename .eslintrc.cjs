module.exports = {
    extends: '@zaitsev_av/eslint-config-zaitsev-av',
    overrides: [
        {
            files: ['**/*.stories.tsx'],
            rules: {
                "import/no-named-as-default": "off"
            },
        },
    ],
}