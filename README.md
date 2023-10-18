# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Steps + Installations:
1. Create the folder of the project.
2. Open the folder in VS.
3. Run on terminal: npm create vite@latest ./ -- --template react
4. Install Tailwind, run on terminal: npm install -D tailwindcss
5. Initiallize Tailwind, run on terminal: npx tailwindcss init
6. Install all the additional packages we are going to use, run on terminal: npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
7. To make Vite and Tailwindcss work together, run on terminal: npm install --legacy-peer-deps -D postcss autoprefixer
8. Initiallize Tailwind, run on terminal: npx tailwindcss init -p
