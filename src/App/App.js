import {lazy, Suspense} from 'react'
import { NavLink, Route, Switch} from "react-router-dom"
import "./App.css"

const Home = lazy(()=> import('../pages/Home' /**webpackChunkName: Home */))
const Details = lazy(()=> import('../pages/Details' /**webpackChunkName: Details */))
const Rewiev = lazy(()=> import('../pages/Rewiev' /**webpackChunkName: Rewiev*/))
const Page = lazy(()=> import('../pages/Page' /**webpackChunkName: Page*/))

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink  exact to="/" className="navLink" activeClassName="activeNavLink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/deteails" className="navLink" activeClassName="activeNavLink">Deteails</NavLink>
          </li>
          <li>
            <NavLink to="/rewiev" className="navLink" activeClassName="activeNavLink">Rewiev</NavLink>
          </li>
          <li>
            <NavLink to="/page" className="navLink" activeClassName="activeNavLink">Page</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback="waiting">
      <Switch>
      <Route exact path="/" component={Home}/>

            <Route path="/deteails">
              <Details/>
            </Route>
            <Route path="/rewiev">
              <Rewiev/>
            </Route>
            <Route path="/page">
              <Page/>
            </Route>

            <Route>
              <p>Page not found</p>
              </Route>
              </Switch>
              </Suspense>
    </div>
    
  );
}

export default App;
