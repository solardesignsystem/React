const plugin = require('tailwindcss/plugin');
const lodash = require('lodash');

module.exports = plugin(function ({ addUtilities, e, theme }) {
    const newUtilities = lodash.map(
        theme('actionableColor', {}),
        (colors, type) => {
            return lodash.map(colors, (variants, color) => {
                return lodash.map(variants, (value, variant) => {
                    let property = '';
                    if (type === 'bg') {
                        property = 'background-color';
                    } else if (type === 'text') {
                        property = 'color';
                    } else {
                        property = type;
                    }

                    if (variant === 'default') {
                        return {
                            [`.${type}-${e(color)}.actionable`]: {
                                [`${property}`]: value,
                            },
                            [`.actionable .${type}-${e(color)}`]: {
                                [`${property}`]: value,
                            },
                            [`.${type}-${e(color)}`]: {
                                [`${property}`]: value,
                            },
                        };
                    }

                    return {
                        [`.${type}-${e(color)}.actionable:${variant}`]: {
                            [`${property}`]: value,
                        },
                        [`.actionable .${type}-${e(color)}:${variant}`]: {
                            [`${property}`]: value,
                        },
                    };
                });
            });
        }
    );
    const allUtilities = {};
    for (const util of newUtilities.flat([2])) {
        for (const key of Object.keys(util)) {
            allUtilities[key] = util[key];
        }
    }
    addUtilities(allUtilities);
});
