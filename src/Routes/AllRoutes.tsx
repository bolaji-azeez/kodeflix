import { createBrowserRouter } from "react-router-dom"
import WebLayout from "../component/Layouts/WebLayout"
import Homepage from "../Pages/Homepage"

const AllRoutes = createBrowserRouter ([
    {
        path: '/',
        element: <WebLayout />,

        children:[
            {
                index: true,
                element: <Homepage />
            }
        ]
    }
])
  

export default AllRoutes
