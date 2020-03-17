import React from 'react'
import './App.css'
import { HashRouter as Router, Route ,Redirect} from 'react-router-dom'      //npm install react-router-dom
import InputPage from './component/InputPage'
import GenerateQR from './component/GenerateQR'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" render={() => (
          <Redirect to="/InputPage" />
        )} />
        <Route path='/inputPage' component={InputPage} />
        <Route path='/secondPage' component={GenerateQR} />
        {/* <Route path='/map' component={Map} /> */}
        {/* <Route path='/GenerateQR' component={GenerateQR} /> */}
      </Router>
    </div>
  );
}

export default App;
