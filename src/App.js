import React from 'react'
import Admin from './pages/Admin'
import  {Switch,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin">
         <Admin/>
        </Route>

      </Switch>
    </div>
  )
}

export default App

