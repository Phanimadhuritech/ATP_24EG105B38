import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"

function RootLayout() {
  return (
    <div>
      <Header />
      {/* placeholder */}
        <div className="min-h-screen mx-16 bg-violet-200">
            <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default RootLayout
