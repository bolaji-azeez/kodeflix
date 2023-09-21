
import {Outlet} from 'react-router-dom'
import Header from "../Blocks/Header"

import Footer from "../Blocks/Footer"

const WebLayout = () => {
  return (
    <div>

      <Header />
      <Outlet />
      <Footer />
      
      
    </div>
  )
}

export default WebLayout
