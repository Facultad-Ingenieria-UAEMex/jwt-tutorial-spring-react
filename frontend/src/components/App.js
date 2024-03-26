import './App.css';
import logo from '../logo.svg';
import Header from './Header'
import AppComponent from './AppComponent';

function App() {
  return (
    <div>
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={logo} /> 
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <AppComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;