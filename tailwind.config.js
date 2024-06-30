import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: ['Poppins'],
            },
            colors: {
                primary: '#FF6666',
                secondary: '#335DCB',
                tertiary: '#1C447D',
            },
            colors: {
                primary: '#FF6666',
                secondary: '#335DCB',
                tertiary: '#1C447D',
            },
        },
    },

    plugins: [
        forms,
        require("daisyui"),
    ],

    daisyui: {
        themes: ["light", "dark"], // Ensure that DaisyUI uses its default light and dark themes
    },
};
