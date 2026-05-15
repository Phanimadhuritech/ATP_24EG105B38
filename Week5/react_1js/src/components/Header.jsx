import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <ul className="flex justify-end gap-5 p-5 bg-red-200 text-1.5xl">
          <li>
            <NavLink to="/" className={({isActive})=>isActive? "text-purple-950" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="register" className={({isActive})=>isActive? "text-purple-950" : ""}>Register</NavLink>
          </li>
          <li>
            <NavLink to="login" className={({isActive})=>isActive? "text-purple-950" : ""}>Login</NavLink>
          </li>
          <li>
            <NavLink to="technologies" className={({isActive})=>isActive? "text-purple-950" : ""}>Technologies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header