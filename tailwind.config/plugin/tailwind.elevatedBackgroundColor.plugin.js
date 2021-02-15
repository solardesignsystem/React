const plugin = require('tailwindcss/plugin');
const lodash = require('lodash');

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
    const newUtilities = lodash.map(
        theme('elevatedBackgroundColor', {}),
        (value, modifier) => {
            return {
                [`.elevated.bg-${e(modifier)}`]: {
                    'background-color': value,
                },
                [`.elevated .bg-${e(modifier)}`]: {
                    'background-color': value,
                },
            };
        }
    );

    addUtilities(newUtilities, variants('elevatedBackgroundColor'));
});
