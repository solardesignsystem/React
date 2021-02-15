module.exports = (theme, { breakpoints }) => ({
    none: 'none',
    0: '0rem',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    prose: '65ch',
    ...breakpoints(theme('screens')),
});
