import { FC } from 'react'
import Default from '@/layouts/Default'
import { Switch, Route } from 'react-router-dom'
import Todo from '@/pages/Todo'

const App: FC = () => {
  return (
    <Default>
      <Switch>
        <Route exact path="/">
          <div></div>
        </Route>
        <Route exact path="/todo">
          <Todo />
        </Route>
      </Switch>
    </Default>
  )
}

export default App
