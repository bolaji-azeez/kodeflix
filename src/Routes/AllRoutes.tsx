import { createBrowserRouter } from "react-router-dom"
import WebLayout from "../component/Layouts/WebLayout"
import Homepage from "../Pages/Homepage"
import Detailed from "../Pages/Detailed"


const Index = createBrowserRouter ([
    {
        path: '/',
        element: <WebLayout />,
        hasErrorBoundary: true,
    

        children:[
            {
                index: true,
                element: <Homepage />
            },
           
        ],
    },
    
        {
            path: "/detailed/:title/:id",
            element: <Detailed />
        },
])
  

export default Index
