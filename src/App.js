import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'

const HatsPage = () => {
  return(
  <div>
    <h1>Hats Page</h1>
  </div>
  )
}

function App() {
    return ( 
      <div>
        
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/hats' component={HatsPage} />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
}

export default App;