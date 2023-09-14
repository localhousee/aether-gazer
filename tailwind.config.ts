import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    'components/**/*.{vue,js,ts,jsx,tsx}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
  ]
}
