import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {AppProvider} from '../Context/AppContext'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ListApp from '../MobileApps/ListApps'
import Feed from '../MobileApps/Feed'
import FormApps from '../MobileApps/FormApps'
import About from '../components/About'

const Routes = () => {
  return (
    <Router>
      <AppProvider>
        <Nav/>
        <Switch>
          <Route path="/" exact>
              <Feed/>
          </Route>
          <Route path="/mobile-list" exact >
            <ListApp/>
          </Route>
          <Route path="/mobile-form" exact >
            <FormApps/>
          </Route>
          <Route path="/about" exact >
            <About/>
          </Route>
        </Switch>
        <Footer/>
      </AppProvider>
    </Router>
  )
}

export default Routes