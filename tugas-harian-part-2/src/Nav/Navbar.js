import {Link} from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {

  const [theme, setTheme] = useState("dark")

  const changeTheme = () => {
    if(theme === "light")
      setTheme("dark")
    else
      setTheme("light")
  }
  return (
    <>
    <div className={theme}>
      <Link to="/">
        Tugas-9
      </Link>
      <Link to="/tugas10">
        Tugas-10
      </Link>
      <Link to="/tugas11">
        Tugas-11
      </Link>
      <Link to="/tugas12">
        Tugas-12
      </Link>
      <Link to="/tugas13">
        Tugas-13
      </Link>
      <Link to="/tugas14">
        Tugas-14
      </Link>
      <Link to="/tugas15">
        Tugas-15
      </Link>
    </div>
    <button onClick={changeTheme} className="navChange">Change Theme</button>
    </>
  )
}

export default Navbar