# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

(30-03-2026)
  # Client side routing in react app (in react_1js)
  extensions for components code is "in react select es7+... ",after installing using the command 'rfce' and press enter this extention generates import statement ie this one "import React from 'react'" we need to remove this.
  For tailwind css we need to open website and do 
      - # Steps to add routing to react application
          - decide root layout(root component is app.jsx and both are different)
               home 
               placeholder
               footer
            create components folder
              and in that create components footer,header,rootlayout and desing rootlayout
          -Install react-router (is a third party module which helps to design react)
             create components which are connected to rootALyout
                - home and path is http://localhost5175/
                - register and path is  http://localhost5175/register
                -login and path is http://localhost5175/register/lo
                -technologies and pth is http://localhost5175/register/login/technologies
                similarly all 


        -configure routing(connecting componets with path )
           this is done in app.jsx all the children of the components and everything 
           to create links we need to create nav bar in header
           a href this is replace by NavLink-will not change the http adds only changes the placeholder
           
  # create backend with employee API
           Create http server
           create employee schema(name,email,mobile,designation and companyname) and model
           define rest api routes for 
              -create employee
              -read all employees
              -edit employees
              -delete employess



             
           

          

