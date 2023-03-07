const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#FEF5E4'
const secondary = '#44BB6D'
const textColor = '#8F3F09'
const dark = '#1A0A00'

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			primary,
			secondary,
			dark,
			text: textColor,
			black: colors.black,
			white: colors.white,
			gray: {
				300: '#d9dae8',
				500: '#999AA5',
				600: '#66676E',
				700: '#39393f',
				800: '#242529',
				900: '#191B1F',
				950: '#101215',
			},
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
		},

		extend: {
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
				17: '17px',
				18: '18px',
				19: '19px',
				22: '22px',
				25: '25px',
				26: '26px',
				27: '27px',
				29: '29px',
				32: '32px',
				39: '39px',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			padding: {
				15: '15px',
				25: '25px',
				26: '26px',
				30: '30px',
				35: '35px',
				45: '45px',
				50: '50px',
				60: '60px',
				90: '90px',
			},
			margin: {
				25: '25px',
				26: '26px',
				30: '30px',
				32: '32px',
				36: '36px',
				60: '60px',
				64: '64px',
				72: '72px',
				75: '75px',
				90: '90px',
				96: '96px',
				108: '108px',
				245: '245px',
				257: '257px',
				294: '294px',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					color: '#fff',
					borderRadius: '0.65rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#ff0009',
					},
				},
				'.primary-gr': {
					background:
						'linear-gradient(180deg, #FEF5E4 0%, rgba(254, 245, 228, 0.5) 100%)',
				},
				'.main-gr': {
					background:
						'linear-gradient(64.31deg,#FEF5E4 15.51%,rgba(254, 245, 228, 0.5) 88.43%)',
				},
				'.prepared-gr': {
					background:
						'linear-gradient(110.72deg, #FEF5E4 1.51%, rgba(254, 245, 228, 0.5) 98.47%);',
				},
				'.link-animation': {
					transform: 'scale(1.1)',
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
