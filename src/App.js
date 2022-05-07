import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Work from './pages/work';
import ErrorPage from './pages/error';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/work" component={Work}/>
        <Route component = {ErrorPage}/>
      </Routes>
    </div>
  );
}

export default App;
