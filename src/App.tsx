import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Authorization from './components/Authorization/Authorization'
import RestPass from './Pages/RestPass'

function App() {
  return (
      <Switch>
        <Route exact path='/' render={() => <Authorization />} />
        <Route exact path='/res' render={()=> <RestPass />} />
      </Switch>
  )
}

export default App
