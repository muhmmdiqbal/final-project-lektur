import './App.css';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Main from './components/main';
// import Router from '../src/routes/router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Main />
      {/* <Router /> */}
      <Footer />
      </BrowserRouter> 
    </div>
  );

}

export default App;
