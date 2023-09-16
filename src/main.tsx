import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import Index from "../src/Routes/AllRoutes.tsx"
import { Globalstyle } from '../src/assets/GlobalStyles/GlobalStyles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Globalstyle />
    <RouterProvider  router={Index}/>
  </React.StrictMode>,
)
