import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import NotFound from './Pages/404'
import ShowUsers from './Pages/ShowUsers'
import MultiStepForm from './Pages/MultiStepForm'
import './styles.css'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={MultiStepForm} />
          <Route exact path='/show' component={ShowUsers} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
