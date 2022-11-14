const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1.25rem',
		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1278px',
			'2xl': '1278px',
		},
		colors: {
			gray: '#444444',
			lightGray: '#6C6C6C',
			blue: '#0F94CD',
			red: '#D93636',
			redDark: '#B92D2D',
			bg: '#F3F3F3',
			yellow: '#F9E167',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
		},
		extend: {
			fontFamily: {
				sans: ['sf-pro-display', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
