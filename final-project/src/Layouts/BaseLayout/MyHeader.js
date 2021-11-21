import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { DataContext } from '../../Contexts/DataContext'
import { useContext } from 'react'

const {Header} = Layout
const { SubMenu } = Menu

const MyHeader = () => {

  const {user, setUser} = useContext(DataContext)
  let floatStyle = 'left'

  if(user !== undefined && Cookies.get('token') !== undefined) floatStyle = 'right'

  const logOut = () => {
    Cookies.remove('token')
    setUser([])
  }

    return(
        <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float: floatStyle}}>
          <Menu.Item key="1">
            <Link to="/"/>Home
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/movies"/>Movies
          </Menu.Item>
          
          <Menu.Item key="3">
            <Link to="/games"/>Games
          </Menu.Item>

          {floatStyle === 'left' ? (
            <Menu.Item key="4">
              <Link to="/login"/>Admin
            </Menu.Item>
          ) : (
            <SubMenu key='4' title='Admin'>
              <Menu.Item key="4a">
                <Link to="/admin/dashboard"/>Dashboard
              </Menu.Item>
              <Menu.Item key="4b" onClick={logOut}>
                <Link to="/login"/>Logout
              </Menu.Item>
            </SubMenu>
          )}
          
        </Menu>
      </Header>
    )
}

export default MyHeader