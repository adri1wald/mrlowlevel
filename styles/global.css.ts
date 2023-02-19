import { globalStyle } from '@vanilla-extract/css'

// Based on https://www.joshwcomeau.com/css/custom-css-reset/

/**
 * Intuitive box-sizing with border-box
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

/**
 * Remove default margin
 */
globalStyle('*', {
  margin: 0,
})

/**
 * Allow percentage-based heights
 */
globalStyle('html, body', {
  height: '100%',
})

/**
 * Typographic tweaks
 */
globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
})

/**
 * Improve media defaults
 */
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

/**
 * Remove built-in form typography styles
 */
globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

/**
 * Avoid text overflows
 */
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

/**
 * Root stacking context
 */
globalStyle('#__next', {
  isolation: 'isolate',
})
