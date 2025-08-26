import './App.css'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

function App() {

  return (
    <HashRouter>
      <AppRouter/>
    </HashRouter>
  )
}

export default App
