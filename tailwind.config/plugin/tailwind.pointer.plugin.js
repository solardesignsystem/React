const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');

module.exports = plugin(function ({ addVariant, e }) {
    addVariant('pointer-coarse', ({ container, separator }) => {
        const pointerCoarse = postcss.atRule({
            name: 'media',
            params: '(pointer: coarse)',
        });
        pointerCoarse.append(container.nodes);
        container.append(pointerCoarse);
        pointerCoarse.walkRules((rule) => {
            rule.selector = `.${e(
                `pointer-coarse${separator}${rule.selector.slice(1)}`
            )}`;
        });
    });
    addVariant('pointer-fine', ({ container, separator }) => {
        const pointerFine = postcss.atRule({
            name: 'media',
            params: '(pointer: fine)',
        });
        pointerFine.append(container.nodes);
        container.append(pointerFine);
        pointerFine.walkRules((rule) => {
            rule.selector = `.${e(
                `pointer-fine${separator}${rule.selector.slice(1)}`
            )}`;
        });
    });
    addVariant('pointer-none', ({ container, separator }) => {
        const pointerNone = postcss.atRule({
            name: 'media',
            params: '(pointer: none)',
        });
        pointerNone.append(container.nodes);
        container.append(pointerNone);
        pointerNone.walkRules((rule) => {
            rule.selector = `.${e(
                `pointer-none${separator}${rule.selector.slice(1)}`
            )}`;
        });
    });
});
