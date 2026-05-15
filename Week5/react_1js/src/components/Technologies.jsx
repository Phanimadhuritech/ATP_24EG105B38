import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
function Technologies() {
  return (
    <div>
      <nav className="p-5">
        <ul className="flex justify-center gap-10 text-emerald-950 text-2xl">
          <li>
            <NavLink to="java">Java</NavLink>
          </li>
          <li>
            <NavLink to="nodejs">Nodejs</NavLink>
          </li>
          <li>
            <NavLink to="vue">Vue</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Technologies