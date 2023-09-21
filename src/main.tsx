import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import AllRoutes from "../src/Routes/AllRoutes.tsx"
import GlobalStyles from '../src/assets/GlobalStyles/GlobalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider  router={AllRoutes}/>
  </React.StrictMode>,
)
