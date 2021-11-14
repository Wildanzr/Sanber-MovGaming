import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.png'

const Nav = () => {
  return (
    <div className="topnav">
      <Link to="/">
        <img src={Logo} width="70"/>
      </Link>

      <Link to="/">
        Home
      </Link>

      <Link to="/mobile-list">
        App List
      </Link>

      <Link to="/about">
        About
      </Link>

      <form>
        <input type="text"/>
        <input type="submit" value="Cari"/>
      </form>
    </div>
  )
}

export default Nav