import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Navbar } from './components/navbar.component'
import DashboardPage from './pages/dashboard-page.component'
import PostsPage from './pages/posts-page.component'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        {/* <Route exact path="/posts/:id" component={} /> */}
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
