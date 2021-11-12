import './App.css';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component'

const HatsPage = () => {
  <div>
    <h1>Hats Page</h1>
  </div>
}

function App() {
    return ( 
      <div>
        
        <Routes>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' component={HatsPage} />
        </Routes>
        
      </div>
    );
}

export default App;