module.exports = {
    plugins: [require('postcss-import'), require('tailwindcss')('./tailwind.config/tailwind.config.js'), require('autoprefixer')],
};
