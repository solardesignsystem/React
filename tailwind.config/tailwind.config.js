const scrollSnapPlugin = require('tailwindcss-scroll-snap');

const actionableColor = require('./config/tailwind.actionableColor.config');
const backgroundColor = require('./config/tailwind.backgroundColor.config');
const borderColor = require('./config/tailwind.borderColor.config');
const divideColor = require('./config/tailwind.divideColor.config');
const elevatedBackgroundColor = require('./config/tailwind.elevatedBackgroundColor.config');
const fill = require('./config/tailwind.fill.config');
const placeholderColor = require('./config/tailwind.placeholderColor.config');
const ringColor = require('./config/tailwind.ringColor.config');
const ringOffsetColor = require('./config/tailwind.ringOffsetColor.config');
const textColor = require('./config/tailwind.textColor.config');

const ringOpacity = require('./config/tailwind.ringOpacity.config');

const borderWidth = require('./config/tailwind.borderWidth.config');
const borderRadius = require('./config/tailwind.borderRadius.config');
const divideWidth = require('./config/tailwind.divideWidth.config');
const maxWidth = require('./config/tailwind.maxWidth.config');
const ringWidth = require('./config/tailwind.ringWidth.config');
const ringOffsetWidth = require('./config/tailwind.ringOffsetWidth.config');
const screens = require('./config/tailwind.screens.config');
const spacing = require('./config/tailwind.spacing.config');
const strokeWidth = require('./config/tailwind.strokeWidth.config');
const translate = require('./config/tailwind.translate.config');

const fontFamily = require('./config/tailwind.fontFamily.config');
const fontSize = require('./config/tailwind.fontSize.config');

const boxShadow = require('./config/tailwind.boxShadow.config');
const outline = require('./config/tailwind.outline.config');

const cursor = require('./config/tailwind.cursor.config');

const listStyleType = require('./config/tailwind.listStyleType.config');

const groupFocusPlugin = require('./plugin/tailwind.groupFocus.plugin');
const pointerPugin = require('./plugin/tailwind.pointer.plugin');
const elevatedBackgroundColorPlugin = require('./plugin/tailwind.elevatedBackgroundColor.plugin');
const actionableColorPlugin = require('./plugin/tailwind.actionableColor.plugin');
const formPlugin = require('@tailwindcss/forms');

module.exports = {
    purge: false,
    dark: false,
    theme: {
        actionableColor,
        backgroundColor,
        backgroundImage: false,
        borderColor,
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
        },
        divideColor,
        elevatedBackgroundColor,
        fill,
        gradientColorStops: {},
        placeholderColor,
        ringColor,
        ringOffsetColor,
        textColor,

        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        placeholderOpacity: false,
        ringOpacity,
        textOpacity: false,

        borderRadius,
        borderWidth,
        divideWidth,
        maxWidth,
        ringOffsetWidth,
        ringWidth,
        screens,
        spacing,
        strokeWidth,
        translate,

        fontFamily,
        fontSize,
        fontSmoothing: false,
        lineHeight: false,

        boxShadow,
        outline,

        cursor,

        listStyleType,
    },
    variants: {
        appearance: [],
        backgroundOpacity: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        borderCollapse: [],
        borderRadius: ['responsive'],
        borderStyle: [],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        color: ['responsive'],
        cursor: [],
        divideColor: [],
        divideWidth: ['responsive'],
        elevatedBackgroundColor: ['responsive'],
        fill: [],
        fontFamily: [],
        fontSize: ['responsive'],
        fontStyle: [],
        fontWeight: ['responsive'],
        gap: ['responsive'],
        height: ['responsive', 'pointer-coarse', 'pointer-fine', 'pointer-none'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: [],
        margin: ['responsive', 'pointer-coarse', 'pointer-fine', 'pointer-none'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        opacity: ['responsive'],
        outline: ['focus'],
        padding: ['responsive', 'pointer-coarse', 'pointer-fine', 'pointer-none'],
        placeholderColor: [],
        rotate: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        scale: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        skew: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        space: ['responsive'],
        stroke: [],
        textDecoration: ['hover', 'group-hover', 'focus', 'active'],
        textTransform: ['hover', 'group-hover', 'focus', 'active'],
        transform: ['responsive'],
        transformOrigin: ['responsive'],
        transitionProperty: [],
        transitionTimingFunction: [],
        translate: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        userSelect: [],
        visibility: ['responsive', 'hover', 'group-hover', 'focus', 'active'],
        whitespace: [],
        width: ['responsive', 'pointer-coarse', 'pointer-fine', 'pointer-none'],
        wordBreak: [],
    },
    plugins: [formPlugin, groupFocusPlugin, pointerPugin, elevatedBackgroundColorPlugin, actionableColorPlugin, scrollSnapPlugin],
};
