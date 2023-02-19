import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/styles/theme.css'
import { transformValues } from '@/utils/common'

// export const sizes = {
//   xs: 18,
//   sm: 22,
//   md: 28,
//   lg: 34,
//   xl: 44,
// }

// export const styles = recipe({
//   base: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 0,
//     border: 'none',
//   },

//   variants: {
//     color: {
//       neutral: { background: 'whitesmoke' },
//       brand: { background: 'blueviolet' },
//       accent: { background: 'slateblue' },
//     },
//     size: transformValues(sizes, (value) => `${value}px`),
//     rounded: {
//       true: { borderRadius: 999 },
//     },
//   },

//   // Applied when multiple variants are set at once
//   compoundVariants: [
//     {
//       variants: {
//         color: 'neutral',
//         size: 'large',
//       },
//       style: {
//         background: 'ghostwhite',
//       },
//     },
//   ],

//   defaultVariants: {
//     color: 'accent',
//     size: 'medium',
//   },
// })
