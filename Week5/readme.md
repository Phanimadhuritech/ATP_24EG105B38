# Week 5 - HTML, CSS, Tailwind CSS, React and Vite

Week 5 contains frontend practice using normal HTML/CSS pages and one React project.
It helps beginners understand how web pages are structured, styled, arranged, and converted into reusable React components.

## What I Used

- HTML structure: `html`, `head`, `body`, `title`, and linked CSS files.
- Text tags: headings, paragraphs, lists, buttons, and links.
- Tables: `table`, `thead`, `tr`, `th`, `td`, `rowspan`, and `colspan`.
- Images: `img` tags with external image URLs.
- CSS basics: colors, borders, spacing, width, height, and text alignment.
- CSS effects: hover effects, shadows, rounded corners, and card styling.
- CSS layouts: Flexbox, Grid, positioning, and media queries.
- React basics: components, props, list rendering, and state.
- Tailwind CSS utility classes inside React components.
- Vite for creating and running the React project.

## HTML and CSS Assignment Files

| File | Details |
|---|---|
| `Asg3.html` + `Asg3.css` | Student marks table using subject rows, practical/theory columns, `rowspan`, `colspan`, borders, and hover effects. |
| `Asg4.html` + `Asg4.css` | Multiple tables for employee details, student subject marks, and expense total. |
| `Asg5.html` + `Asg5.css` | Cat profile card with image, title, paragraph, button, lavender card background, and logo positioned at the top-right. |
| `Asg6.html` + `Asg6.css` | Character profile cards using images, shadows, rounded images, and Flexbox alignment. |
| `Asg7.html` + `Asg7.css` | Navigation bar and article/card layout using lists, images, headings, and paragraph content. |
| `Asg8.html` + `Asg8.css` | CSS Grid layout with five colored blocks and responsive media query practice. |
| `Asg9.html` + `Asg9.css` | Landing page with hero section, header text, image area, and three-column Flexbox content. |

## CSS Concepts Practiced

- `margin` and `padding` are used for spacing.
- `box-sizing: border-box` helps control element sizes.
- `background-color` and `color` style the page and text.
- `border`, `border-collapse`, and `border-radius` style tables and cards.
- `box-shadow` creates card-like depth.
- `display: flex` arranges content in rows or columns.
- `display: grid` creates multi-section layouts.
- `position: relative` and `position: absolute` place elements exactly.
- `:hover` changes styles when the mouse moves over an element.
- `@media` helps make layouts responsive.

## React Project

Path: `reactjs/`

The React app is built with Vite.
React is used to divide the page into smaller components.
Vite provides the development server and build setup.

| React File | Use |
|---|---|
| `src/main.jsx` | Starts the React app and renders `App`. |
| `src/App.jsx` | Main component that displays Navbar, UsersList, and Footer. |
| `src/components/Navbar.jsx` | Navigation bar component with logo and menu links. |
| `src/components/UsersList.jsx` | Stores user data and displays cards using `map()`. |
| `src/components/user.jsx` | Reusable user card that receives data using props. |
| `src/components/Footer.jsx` | Footer with location and contact details. |
| `src/components/Counter.jsx` | Counter example using React `useState`. |
| `src/App.css`, `src/index.css` | CSS files for React styling. |

## Tailwind CSS

Tailwind CSS is used in React through utility classes.
Examples used include `flex`, `grid`, `gap-5`, `p-5`, `m-10`, `bg-gray-300`, `text-3xl`, `rounded-3xl`, and `shadow-2xl`.
These classes help style elements directly inside JSX without writing separate CSS for every small style.

## Vite and Project Files

- `package.json` stores dependencies and npm scripts.
- `vite.config.js` contains Vite configuration.
- `tailwind.config.js` contains Tailwind configuration.
- `eslint.config.js` helps check code quality.
- `index.html` is the main HTML file used by Vite.

## How to Run

Open HTML files directly in a browser.
To run React:

```bash
cd reactjs
npm install
npm run dev
```

Week 5 focuses on building styled pages first, then learning how React, Tailwind CSS, and Vite make frontend development easier.
