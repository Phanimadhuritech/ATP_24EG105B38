# Week 5 - React, Vite, Tailwind CSS and Routing

This folder contains Week 5 practice work using React, Vite, Tailwind CSS, reusable components, and React Router.

## What I Used

- HTML, CSS, JavaScript, React 19, React DOM, Vite, Tailwind CSS, React Router DOM, ESLint, Node.js and npm.

## Folder Structure

| Folder | Description |
|---|---|
| `reactjs` | Basic React + Vite app with Navbar, Footer, Counter, User, and UsersList components. |
| `react_1js` | React Router app with Header, Footer, RootLayout, pages, nested routes, and technology pages. |
| `Tailwind_Project` | React + Vite project used for Tailwind CSS styling practice. |
| `TAILWIND_STYLES` | Tailwind CLI practice using input CSS, output CSS, and simple HTML pages. |

## Installed Packages

| Project | Packages Used |
|---|---|
| `reactjs` | `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/postcss`, `eslint` |
| `react_1js` | `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`, `react-router`, `react-router-dom`, `eslint` |
| `Tailwind_Project` | `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `eslint` |
| `TAILWIND_STYLES` | `tailwindcss`, `@tailwindcss/cli` |

## Main Concepts Practiced

- Creating React apps with Vite.
- Building reusable components.
- Using props, component imports, and component structure.
- Practicing state with a counter component.
- Styling pages with normal CSS and Tailwind CSS.
- Creating common layouts with Header, Footer, RootLayout, and Outlet.
- Setting up routing with `createBrowserRouter` and `RouterProvider`.
- Using nested routes, `Outlet`, `Navigate`, and `NavLink`.

## Important Files

| File | Purpose |
|---|---|
| `reactjs/src/App.jsx` | Main component for the first React practice app. |
| `reactjs/src/components/Counter.jsx` | Counter component practice. |
| `reactjs/src/components/UsersList.jsx` | User list component practice. |
| `react_1js/src/App.jsx` | Main route configuration. |
| `react_1js/src/components/RootLayout.jsx` | Common layout with Header, Footer, and Outlet. |
| `react_1js/src/components/Technologies.jsx` | Nested technology navigation page. |

## How to Run a React Project

```bash
cd Week5/react_1js
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173/`.

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Tailwind CLI Practice

```bash
cd Week5/TAILWIND_STYLES
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```

Use `Styles1.html`, `Styles2.html`, and `Styles3.html` to view Tailwind utility practice.

## Routes in `react_1js`

| Route | Page |
|---|---|
| `/` | Home |
| `/register` | Register |
| `/login` | Login |
| `/technologies/java` | Java |
| `/technologies/nodejs` | Node.js |
| `/technologies/vue` | Vue |

Week 5 focuses on React setup, components, Tailwind styling, routing, nested routes, and project structure using Vite.
