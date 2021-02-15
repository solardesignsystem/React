const plugin = require('tailwindcss/plugin');
const selectorParser = require('postcss-selector-parser');

module.exports = plugin(function ({ addVariant, prefix }) {
    addVariant('group-focus', ({ modifySelectors, separator }) => {
        return modifySelectors(({ selector }) => {
            return selectorParser((selectors) => {
                selectors.walkClasses((sel) => {
                    sel.value = `group-focus${separator}${sel.value}`;
                    sel.parent.insertBefore(
                        sel,
                        selectorParser().astSync(prefix('.group:focus '))
                    );
                });
            }).processSync(selector);
        });
    });
});
